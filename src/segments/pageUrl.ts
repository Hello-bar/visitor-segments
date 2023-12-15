import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

export class PageUrl extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.PAGE_URL, visitor);
  }

  setValue(value?: any) {
    super.setValue(value || this.defaultValue());
  }

  protected defaultValue(): {} {
    return document.location.href;
  }
}
