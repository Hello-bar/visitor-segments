import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"
import {normalizeUrl} from "../../lib/normalizeUrl";

export class PagePath extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.PAGE_PATH, visitor);
  }

  setValue(value?:any) {
    super.setValue(value || this.defaultValue());
  }

  protected defaultValue(): {} {
    return normalizeUrl(document.location.pathname, true)
  }
}