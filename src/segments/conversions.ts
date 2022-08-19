import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Conversions extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.CONVERSIONS, visitor);
  }

  get value(): number {
    return super.value || 0
  }

  setValue() {
    super.setValue(this.value + 1);
  }
}
