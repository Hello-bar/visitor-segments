import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class ReferrerTerms extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.REFERRER_TERMS, visitor);
  }

  setValue(value: any) {
    if (value) {
      super.setValue(value);
    }
  }
}
