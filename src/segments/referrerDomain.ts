import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class ReferrerDomain extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.REFERRER_DOMAIN, visitor);
  }
}