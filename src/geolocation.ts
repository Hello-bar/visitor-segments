import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {City} from "./segments/city";
import {Region} from "./segments/region";
import {Country} from "./segments/country";
import {SegmentsFacade} from "./lib/interfaces";

enum STATUSES {
  success = 'success',
  fail = 'fail'
}

type GeoLocationInfo = {
  status: STATUSES,
  country: string,
  countryCode: string,
  regionName: string,
  region: string,
  city: string,
  timezone: string,
  mobile: boolean
}

export class GeoLocation implements SegmentsFacade {
  #city: City;
  #region: Region;
  #country: Country;
  #key: string | null = null;

  constructor(segments: Segments) {
    this.#city = segments.getSegmentByKey(SEGMENT_KEYS.CITY)
    this.#region = segments.getSegmentByKey(SEGMENT_KEYS.REGION)
    this.#country = segments.getSegmentByKey(SEGMENT_KEYS.COUNTRY)
  }

  get url(): string {
    const fields = 'status,country,countryCode,regionName,region,city,timezone,mobile'
    return this.#key ?
      `https://pro.ip-api.com/json?key${this.#key}&fields=${fields}` :
      `http://ip-api.com/json?fields=${fields}`;
  }

  get city(): string | null {
    return this.#city.value
  }

  get region(): string | null {
    return this.#region.value
  }

  get country(): string | null {
    return this.#country.value
  }

  setKey(key: string) {
    this.#key = key
  }

  async update() {
    const info = await this.getLocationInfo()

    if (info.status === STATUSES.success) {
      this.#city.setValue(info.city)
      this.#region.setValue(info.region)
      this.#country.setValue(info.countryCode)
    }
  }

  reset(): void {
    this.#city.reset()
    this.#region.reset()
    this.#country.reset()
  }

  protected async getLocationInfo() {
    let json: GeoLocationInfo

    try {
      const response = await fetch(this.url)
      json = await response.json()
    } catch (err) {
      json = {status: STATUSES.fail} as GeoLocationInfo
    }

    return json
  }
}
