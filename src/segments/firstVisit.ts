import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class FirstVisit extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.FIRST_VISIT, visitor);
  }

  setValue() {
    super.setValueOnce(this.now());
  }

  reset() {
    super.reset();
    this.setValue();
  }
}
