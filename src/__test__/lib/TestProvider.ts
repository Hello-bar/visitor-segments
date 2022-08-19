import { GEO_INFO_STATUSES, GeoLocationInfo, GeoProviderAdapter } from '../../lib/interfaces';

export class TestProvider implements GeoProviderAdapter {
  info: GeoLocationInfo = { status: GEO_INFO_STATUSES.success };

  set(key: any, value: string) {
    // @ts-ignore
    this.info[key] = value;
  }

  async getLocationInfo() {
    return this.info;
  }
}
