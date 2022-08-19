import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {AdCampaign} from "./segments/adCampaign";
import {AdTerm} from "./segments/adTerm";
import {AdSource} from "./segments/adSource";
import {AdMedium} from "./segments/adMedium";
import {AdContent} from "./segments/adContent";
import {Params as ParamsSegment} from "./segments/params";
import {SegmentsFacade} from "./lib/interfaces";

export class Params implements SegmentsFacade {
  #campaign: AdCampaign;
  #content: AdContent;
  #medium: AdMedium;
  #source: AdSource;
  #term: AdTerm;
  #params: ParamsSegment;

  constructor(segments: Segments) {
    this.#campaign = segments.getSegmentByKey(SEGMENT_KEYS.AD_CAMPAIGN)
    this.#content = segments.getSegmentByKey(SEGMENT_KEYS.AD_CONTENT)
    this.#medium = segments.getSegmentByKey(SEGMENT_KEYS.AD_MEDIUM)
    this.#source = segments.getSegmentByKey(SEGMENT_KEYS.AD_SOURCE)
    this.#term = segments.getSegmentByKey(SEGMENT_KEYS.AD_TERM)
    this.#params = segments.getSegmentByKey(SEGMENT_KEYS.PARAMS)
  }

  get campaign(): string|null {
    return this.#campaign.value
  }

  get content(): string|null {
    return this.#content.value
  }

  get medium(): string|null {
    return this.#medium.value
  }

  get source(): string|null {
    return this.#source.value
  }

  get term(): string|null {
    return this.#term.value
  }

  get all(): {} {
    return this.#params.value
  }

  update(): void {
    const params = paramsFromString(location.search);

    this.#campaign.setValue(params.utm_campaign)
    this.#content.setValue(params.utm_content)
    this.#medium.setValue(params.utm_medium)
    this.#source.setValue(params.utm_source)
    this.#term.setValue(params.utm_term)
    this.#params.setValue(params)
  }

  reset(): void {
    this.#campaign.reset()
    this.#content.reset()
    this.#medium.reset()
    this.#source.reset()
    this.#term.reset()
    this.#params.reset()
  }
}

function paramsFromString(string: string) {
  return Object.fromEntries(new URLSearchParams(string));
}