import {Segments} from "./segments";
import {SEGMENT_KEYS} from "./segmentMaps";
import {City} from "./segments/city";
import {Region} from "./segments/region";
import {Country} from "./segments/country";
import {GEO_INFO_STATUSES, GeoProviderAdapter, SegmentsFacade} from "./lib/interfaces";

export class GeoLocation implements SegmentsFacade {
  #city: City;
  #region: Region;
  #country: Country;
  #adapter: GeoProviderAdapter;

  constructor(segments: Segments, adapter: GeoProviderAdapter) {
    this.#city = segments.getSegmentByKey(SEGMENT_KEYS.CITY)
    this.#region = segments.getSegmentByKey(SEGMENT_KEYS.REGION)
    this.#country = segments.getSegmentByKey(SEGMENT_KEYS.COUNTRY)
    this.#adapter = adapter
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

  async update() {
    const info = await this.#adapter.getLocationInfo()

    if (info.status === GEO_INFO_STATUSES.success) {
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
}
