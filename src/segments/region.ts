import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Region extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.REGION, visitor);
  }
}