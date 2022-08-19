import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class Timezone extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.TIMEZONE, visitor);
  }
}
