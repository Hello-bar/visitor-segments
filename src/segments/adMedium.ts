import {SEGMENT_KEYS} from "../segmentMaps";
import {ValueStorageInterface} from "../lib/interfaces"
import {AdSegment} from "./adSegment";

export class AdMedium extends AdSegment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.AD_MEDIUM, visitor);
  }
}
