import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class OriginalReferrer extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.ORIGINAL_REFERRER, visitor);
  }

  setValue(value: any) {
    super.setValueOnce(value);
  }
}
