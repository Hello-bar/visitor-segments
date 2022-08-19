import {Visitor} from "./visitor";
import {Visits} from "./visits";
import {buildSegments, SEGMENT_KEYS} from "./segmentMaps";
import {Segment} from "./segment";
import {Session} from "./session";
import {Params} from "./params";
import {GeoLocation} from "./geolocation";
import {Referrer} from "./referrer";
import {Page} from "./page";
import {Conversions} from "./conversions";
import {GeoProvider, GeoProviderAdapter, StorageAdapterClass} from "./lib/interfaces";
import {Interpolation} from "./interpolation";
import {IPApiProvider} from "./geo/ipapiProvider";

export class Segments {
  visits: Visits;
  session: Session;
  params: Params;
  geolocation: GeoLocation;
  referrer: Referrer;
  page: Page;
  conversions: Conversions;
  readonly #segments: { [key: string]: Segment };
  readonly #visitor: Visitor;
  readonly #interpolation: Interpolation;
  private custom: Segment;

  constructor(key: string, adapter: StorageAdapterClass, geo: GeoProviderAdapter) {
    this.#visitor = new Visitor(key, adapter)
    this.#segments = buildSegments(this.#visitor)
    this.#interpolation = new Interpolation(this)
    this.visits = new Visits(this)
    this.session = new Session(this)
    this.conversions = new Conversions(this)
    this.params = new Params(this)
    this.geolocation = new GeoLocation(this, geo)
    this.referrer = new Referrer(this)
    this.page = new Page(this)
    this.custom = this.getSegmentByKey(SEGMENT_KEYS.CUSTOM)
  }

  interpolate(input: string) {
    return this.#interpolation.run(input)
  }

  set(key: string, value: any) {
    this.custom.setValue({...this.custom.value, [key]: value})
  }

  get(key: string) {
    return this.custom.value[key]
  }

  async visit() {
    this.visits.update()
    this.session.update()
    this.params.update()
    this.referrer.update()
    this.page.update()
    await this.geolocation.update()
  }

  convert(): void {
    this.conversions.update()
  }

  reset(): void {
    this.geolocation.reset()
    this.visits.reset()
    this.session.reset()
    this.params.reset()
    this.referrer.reset()
    this.page.reset()
    this.conversions.reset()
  }

  clear() {
    this.#visitor.clear()
  }

  getSegmentByKey(key: SEGMENT_KEYS): Segment {
    return this.#segments[key]
  }
}
