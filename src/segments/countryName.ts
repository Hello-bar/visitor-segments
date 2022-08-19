import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class CountryName extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.COUNTRY_NAME, visitor);
  }
}
