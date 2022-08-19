import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Device extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.DEVICE, visitor);
  }

  setValue(value?: any) {
    super.setValue(value || this.defaultValue());
  }

  protected defaultValue() {
    const ua = navigator.userAgent
    if (ua.match(/ipad/i)) return 'tablet'
    else if (ua.match(/(mobi|phone|ipod|blackberry|docomo)/i)) return 'mobile'
    else if (ua.match(/(ipad|kindle|android)/i)) return 'tablet'
    return 'computer'
  }
}
