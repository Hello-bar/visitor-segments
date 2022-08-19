import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class MobileCell extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.MOBILE_CELL, visitor);
  }
}
