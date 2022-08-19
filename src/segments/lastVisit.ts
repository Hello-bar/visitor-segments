import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces";

export class LastVisit extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.LAST_VISIT, visitor);
  }

  setValue() {
    super.setValue(this.now());
  }
}