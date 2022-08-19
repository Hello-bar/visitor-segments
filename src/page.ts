import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {Device} from "./segments/device";
import {DateSegment} from "./segments/dateSegment";
import {Cookies} from "./segments/cookies";
import {DayOfWeek} from "./segments/dayOfWeek";
import {PagePath} from "./segments/pagePath";
import {UrlKeywords} from "./segments/urlKeywords";
import {WordpressTags} from "./segments/wordpressTags";
import {SegmentsFacade} from "./lib/interfaces";

export class Page implements SegmentsFacade {
  #device: Device;
  #cookies: Cookies;
  #date: DateSegment;
  #dayOfWeek: DayOfWeek;
  #path: PagePath;
  #keywords: UrlKeywords;
  #wpTags: WordpressTags;

  constructor(segments: Segments) {
    this.#device = segments.getSegmentByKey(SEGMENT_KEYS.DEVICE) as Device
    this.#cookies = segments.getSegmentByKey(SEGMENT_KEYS.COOKIES) as Cookies
    this.#date = segments.getSegmentByKey(SEGMENT_KEYS.DATE)
    this.#dayOfWeek = segments.getSegmentByKey(SEGMENT_KEYS.DAY_OF_WEEK)
    this.#path = segments.getSegmentByKey(SEGMENT_KEYS.PAGE_PATH) as PagePath
    this.#keywords = segments.getSegmentByKey(SEGMENT_KEYS.URL_KEYWORDS) as UrlKeywords
    this.#wpTags = segments.getSegmentByKey(SEGMENT_KEYS.WORDPRESS_TAGS) as WordpressTags
  }

  get device(): string {
    return this.#device.value
  }

  get cookies(): {} | null {
    return this.#cookies.value
  }

  get date(): string {
    return this.#date.value
  }

  get dayOfWeek(): number {
    return this.#dayOfWeek.value
  }

  get path(): string {
    return this.#path.value
  }

  get urlKeywords(): string[] {
    return this.#keywords.value
  }

  get wordpressTags(): string[] {
    return this.#wpTags.value
  }

  update(): void {
    this.#device.setValue()
    this.#cookies.setValue()
    this.#date.setValue()
    this.#dayOfWeek.setValue()
    this.#path.setValue()
    this.#keywords.setValue()
    this.#wpTags.setValue()
  }

  reset(): void {
    this.#device.reset()
    this.#cookies.reset()
    this.#date.reset()
    this.#dayOfWeek.reset()
    this.#path.reset()
    this.#keywords.reset()
    this.#wpTags.reset()
  }
}
