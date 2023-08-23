import { SEGMENT_KEYS } from '../segmentMaps';
import { Segment } from '../segment';
import { ValueStorageInterface } from '../lib/interfaces';

declare global {
  interface Window {
    _hellobar_adblocker__not_detected: boolean;
  }
}

export class AdBlockerDetect extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.AD_BLOCKER_DETECT, visitor);
  }
}
