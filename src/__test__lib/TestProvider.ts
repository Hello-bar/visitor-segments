import { GEO_INFO_STATUSES, GeoLocationInfo, GeoProviderAdapter, AdBlockerInfo, AdBlockProviderAdapter } from '../lib/interfaces';

export class GeoTestProvider implements GeoProviderAdapter {
  info: GeoLocationInfo = { status: GEO_INFO_STATUSES.success };

  set(key: any, value: any) {
    (this.info as any)[key] = value;
  }

  async getLocationInfo() {
    return this.info;
  }
}

export class AdBlockerTestProvider implements AdBlockProviderAdapter {
  info: AdBlockerInfo|any = { isEnabled: false };

  set(key: any, value: any) {
    this.info[key] = value;
  }

  async getAdBlockerInfo() {
    return this.info;
  }
}