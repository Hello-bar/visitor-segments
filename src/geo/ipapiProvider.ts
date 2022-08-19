import {GEO_INFO_STATUSES, GeoLocationInfo, GeoProviderAdapter} from "../lib/interfaces";

export class IPApiProvider implements GeoProviderAdapter {
  static key: string | null

  get url(): string {
    const fields = 'status,country,countryCode,regionName,region,city,timezone,mobile'
    return IPApiProvider.key ?
      `https://pro.ip-api.com/json?key${IPApiProvider.key}&fields=${fields}` :
      `http://ip-api.com/json?fields=${fields}`;
  }

  async getLocationInfo() {
    let json: GeoLocationInfo

    try {
      const response = await fetch(this.url)
      json = await response.json()
    } catch (err) {
      json = {status: GEO_INFO_STATUSES.fail} as GeoLocationInfo
    }

    return json
  }
}
