import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces";

export class Sessions extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.SESSIONS, visitor);
  }

  get value(): number {
    return super.value || 0
  }

  setValue(value?: any) {
    super.setValue(value || this.value + 1);
  }

  reset() {
    super.reset();
    super.setValue(0);
  }
}
