import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class RegionName extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.REGION_NAME, visitor);
  }
}
