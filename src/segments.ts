import { Visits } from './visits';
import { Session } from './session';
import { Params } from './params';
import { GeoLocation } from './geolocation';
import { Referrer } from './referrer';
import { Page } from './page';
import { Conversions } from './conversions';
import { SegmentsAdapters } from './lib/interfaces';
import { IPApiProvider } from './geo/ipapiProvider';
import { AbstractSegments } from './abstractSegments';
import { AdBlocker } from './adBlocker';
import { AdBlockProvider } from './ads/adBlockProvider';

export class Segments extends AbstractSegments {
  visits: Visits;
  session: Session;
  params: Params;
  geolocation: GeoLocation;
  referrer: Referrer;
  page: Page;
  conversions: Conversions;
  adBlocker: AdBlocker;

  constructor(scope: string, options?: SegmentsAdapters) {
    const geoAdapter = options?.geoAdapter || new IPApiProvider();
    const adAdapter = options?.adAdapter || new AdBlockProvider();
    super(scope, options);

    this.visits = new Visits(this);
    this.session = new Session(this);
    this.conversions = new Conversions(this);
    this.params = new Params(this);
    this.geolocation = new GeoLocation(this, geoAdapter);
    this.referrer = new Referrer(this);
    this.page = new Page(this);
    this.adBlocker = new AdBlocker(this, adAdapter);
  }

  async visit() {
    await super.visit();
    this.visits.update();
    this.session.update();
    this.params.update();
    this.referrer.update();
    this.page.update();
    await this.geolocation.update();
    await this.adBlocker.update();
  }

  convert(): void {
    this.conversions.update();
  }

  reset(): void {
    super.reset();
    this.geolocation.reset();
    this.visits.reset();
    this.session.reset();
    this.params.reset();
    this.referrer.reset();
    this.page.reset();
    this.conversions.reset();
    this.adBlocker.reset();
  }

  clear() {
    super.clear();
  }
}
