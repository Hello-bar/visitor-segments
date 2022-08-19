import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Referrer extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.REFERRER, visitor);
  }
}