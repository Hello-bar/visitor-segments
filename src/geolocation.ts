import { Segments } from './segments';
import { SEGMENT_KEYS } from './segmentMaps';
import { City } from './segments/city';
import { Region } from './segments/region';
import { Country } from './segments/country';
import { GEO_INFO_STATUSES, GeoLocationInfo, GeoProviderAdapter, SegmentsFacade } from './lib/interfaces';
import { CountryName } from './segments/countryName';
import { MobileCell } from './segments/mobileCell';
import { RegionName } from './segments/regionName';
import { Timezone } from './segments/timezone';

export class GeoLocation implements SegmentsFacade {
  #city: City;
  #region: Region;
  #country: Country;
  #adapter: GeoProviderAdapter;
  #countryName: CountryName;
  #mobileCell: MobileCell;
  #regionName: RegionName;
  #timezone: Timezone;

  constructor(segments: Segments, adapter: GeoProviderAdapter) {
    this.#city = segments.getSegmentByKey(SEGMENT_KEYS.CITY);
    this.#region = segments.getSegmentByKey(SEGMENT_KEYS.REGION);
    this.#country = segments.getSegmentByKey(SEGMENT_KEYS.COUNTRY);
    this.#countryName = segments.getSegmentByKey(SEGMENT_KEYS.COUNTRY_NAME);
    this.#mobileCell = segments.getSegmentByKey(SEGMENT_KEYS.MOBILE_CELL);
    this.#regionName = segments.getSegmentByKey(SEGMENT_KEYS.REGION_NAME);
    this.#timezone = segments.getSegmentByKey(SEGMENT_KEYS.TIMEZONE);
    this.#adapter = adapter;
  }

  get city(): string | null {
    return this.#city.value;
  }

  get region(): string | null {
    return this.#region.value;
  }

  get country(): string | null {
    return this.#country.value;
  }

  get countryName(): string | null {
    return this.#countryName.value;
  }

  get regionName(): string | null {
    return this.#regionName.value;
  }

  get timezone(): string | null {
    return this.#timezone.value;
  }

  get mobileCell(): string | null {
    return this.#mobileCell.value;
  }

  async update(override?: GeoLocationInfo) {
    const info = override || (await this.#adapter.getLocationInfo());

    if (info.status === GEO_INFO_STATUSES.success) {
      this.#city.setValue(info.city);
      this.#region.setValue(info.region);
      this.#regionName.setValue(info.regionName);
      this.#country.setValue(info.countryCode);
      this.#countryName.setValue(info.country);
      this.#timezone.setValue(info.timezone);
      this.#mobileCell.setValue(info.mobile);
    }
  }

  reset(): void {
    this.#city.reset();
    this.#region.reset();
    this.#regionName.reset();
    this.#country.reset();
    this.#countryName.reset();
    this.#mobileCell.reset();
    this.#timezone.reset();
  }
}
