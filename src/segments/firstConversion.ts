import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class FirstConversion extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.FIRST_CONVERSION, visitor);
  }

  setValue(value?: any) {
    super.setValueOnce(value || this.now());
  }
}
