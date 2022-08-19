import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { DAY } from '../lib/dateUtils';
import { ValueStorageInterface } from '../lib/interfaces';

export class LastVisitDays extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.LAST_VISIT_DAYS, visitor);
  }

  setValue(lastVisit?: number) {
    if (lastVisit) {
      super.setValue(Math.round((this.now() - lastVisit) / DAY));
    } else {
      super.setValue(0);
    }
  }

  reset(value: number) {
    super.reset();
    this.setValue(value);
  }
}
