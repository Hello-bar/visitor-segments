import Segments from './index';
import { SEGMENT_KEYS } from './segmentMaps';
import { AdBlockProviderAdapter, AdBlockerInfo, SegmentsFacade } from './lib/interfaces';
import { AdBlockerDetect } from './segments/adBlockerDetect';

export class AdBlocker implements SegmentsFacade {

  #adBlockerDetect: AdBlockerDetect;
  #adapter: AdBlockProviderAdapter;

  constructor(segments: Segments, adapter: AdBlockProviderAdapter) {
    this.#adBlockerDetect = segments.getSegmentByKey(SEGMENT_KEYS.AD_BLOCKER_DETECT);
    this.#adapter = adapter;
  }

  get adBlockerDetect(): any {
    return this.#adBlockerDetect.value;
  }

  async update(override?: AdBlockerInfo) {
    const info = override || await this.#adapter.getAdBlockerInfo();
    this.#adBlockerDetect.setValue(info?.isEnabled);
  }

  reset(): void {
    this.#adBlockerDetect.reset();
  }
}