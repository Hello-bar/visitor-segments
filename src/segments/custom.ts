import { SEGMENT_KEYS } from '../segmentMaps';
import { ValueStorageInterface } from '../lib/interfaces';
import { Segment } from '../segment';

export class Custom extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.CUSTOM, visitor);
  }

  get value() {
    return super.value || {};
  }
}
