import {SEGMENT_KEYS} from "../segmentMaps";
import {AdSegment} from "./adSegment";
import {ValueStorageInterface} from "../lib/interfaces";

export class AdCampaign extends AdSegment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.AD_CAMPAIGN, visitor);
  }
}
