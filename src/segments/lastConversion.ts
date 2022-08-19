import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class LastConversion extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.LAST_CONVERSION, visitor);
  }

  setValue(value?: any) {
    super.setValue(value || this.now());
  }
}
