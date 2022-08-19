import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Params extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.PARAMS, visitor);
  }

  setValue(value: any) {
    if (value) {
      super.setValue(value);
    }
  }
}
