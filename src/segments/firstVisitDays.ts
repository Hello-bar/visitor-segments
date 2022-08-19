import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {DAY} from "../lib/dateUtils";
import {ValueStorageInterface} from "../lib/interfaces";

export class FirstVisitDays extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.FIRST_VISIT_DAYS, visitor);
  }

  setValue(firstVisit: number) {
    super.setValue(Math.round((this.now() - firstVisit) / DAY));
  }

  reset(value: number) {
    super.reset()
    this.setValue(value)
  }
}
