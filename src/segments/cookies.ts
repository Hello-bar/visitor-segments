import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';
import { parseCookies } from '../lib/parseCookies';

export class Cookies extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.COOKIES, visitor);
  }

  get value(): {} | null {
    return super.value;
  }

  setValue(value?: any) {
    if (value || this.defaultValue()) {
      super.setValue(value || this.defaultValue());
    }
  }

  protected defaultValue(): {} {
    return parseCookies();
  }
}
