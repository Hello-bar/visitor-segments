import { SEGMENT_KEYS } from '../segmentMaps';
import { ValueStorageInterface } from '../lib/interfaces';
import { AdSegment } from './adSegment';

export class AdSource extends AdSegment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.AD_SOURCE, visitor);
  }
}
