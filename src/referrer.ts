import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {Referrer as ReferrerSegment} from "./segments/referrer";
import {OriginalReferrer} from "./segments/originalReferrer";
import {ReferrerDomain} from "./segments/referrerDomain";
import {ReferrerTerms} from "./segments/referrerTerms";
import referrerInfo from "./segments/referrerInfo";
import {PreviousPage} from "./segments/previousPage";
import {SegmentsFacade} from "./lib/interfaces";

export class Referrer implements SegmentsFacade {
  #originalReferrer: OriginalReferrer;
  #referrer: ReferrerSegment;
  #referrerDomain: ReferrerDomain;
  #referrerTerms: ReferrerTerms;
  #previousPage: PreviousPage;

  constructor(segments: Segments) {
    this.#originalReferrer = segments.getSegmentByKey(SEGMENT_KEYS.ORIGINAL_REFERRER)
    this.#referrer = segments.getSegmentByKey(SEGMENT_KEYS.REFERRER)
    this.#referrerDomain = segments.getSegmentByKey(SEGMENT_KEYS.REFERRER_DOMAIN)
    this.#referrerTerms = segments.getSegmentByKey(SEGMENT_KEYS.REFERRER_TERMS)
    this.#previousPage = segments.getSegmentByKey(SEGMENT_KEYS.PREVIOUS_PAGE)
  }

  get originalReferrer(): string|null {
    return this.#originalReferrer.value
  }

  get referrer(): string|null {
    return this.#referrer.value
  }

  get referrerDomain(): string|null {
    return this.#referrerDomain.value
  }

  get referrerTerms(): string|null {
    return this.#referrerTerms.value
  }

  get previousPage(): string|null {
    return this.#previousPage.value
  }

  update(): void {
    const info = referrerInfo()

    if (!info) {
      this.reset()
      return
    }

    this.#originalReferrer.setValue(info.referrer)
    this.#previousPage.setValue(info.referrer)

    if (info.isExternal) {
      this.#referrer.setValue(info.referrer)
      this.#referrerDomain.setValue(info.domain)
      this.#referrerTerms.setValue(info.searchTerms)
    }
  }

  reset(): void {
    this.#originalReferrer.reset()
    this.#referrer.reset()
    this.#referrerDomain.reset()
    this.#referrerTerms.reset()
    this.#previousPage.reset()
  }
}