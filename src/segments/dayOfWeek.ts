import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class DayOfWeek extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.DAY_OF_WEEK, visitor);
  }

  get value(): number {
    return super.value
  }

  setValue(value?:any) {
    const nowDate = new Date()
    super.setValue(value || nowDate.getDay());
  }
}
