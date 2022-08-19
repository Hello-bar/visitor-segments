import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Visits extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.VISITS, visitor);
  }

  get value(): number {
    return super.value || 0
  }

  setValue(value?:any) {
    super.setValue(value || this.value + 1);
  }
}