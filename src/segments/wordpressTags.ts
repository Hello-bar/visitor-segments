import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

declare global {
  interface Window {
    _hellobar_wordpress_tags: string[];
  }
}

export class WordpressTags extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.WORDPRESS_TAGS, visitor);
  }

  get value(): string[] {
    return super.value || []
  }

  setValue(value?: any) {
    const tags = value || this.defaultValue()

    if (tags?.length && tags?.length > 0) {
      super.setValue(tags);
    }
  }

  protected defaultValue() {
    return window._hellobar_wordpress_tags || []
  }
}
