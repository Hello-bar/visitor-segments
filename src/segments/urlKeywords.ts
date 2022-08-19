import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class UrlKeywords extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.URL_KEYWORDS, visitor);
  }

  get value(): string[] {
    return super.value || []
  }

  setValue(value?: any) {
    super.setValue(value || this.defaultValue())
  }

  protected defaultValue(): any {
    return (document.location.pathname + document.location.search)
      .split(/\W/)
      .filter(a => a !== '')
  }
}
