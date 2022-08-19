import {SEGMENT_KEYS} from "../segmentMaps";
import {ValueStorageInterface} from "../lib/interfaces"
import {AdSegment} from "./adSegment";

export class AdTerm extends AdSegment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.AD_TERM, visitor);
  }
}
