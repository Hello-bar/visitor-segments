import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {Conversions as ConversionsSegment} from "./segments/conversions";
import {FirstConversion} from "./segments/firstConversion";
import {LastConversion} from "./segments/lastConversion";
import {SegmentsFacade} from "./lib/interfaces";

export class Conversions implements SegmentsFacade {
  #total: ConversionsSegment;
  #first: FirstConversion;
  #last: LastConversion;

  constructor(segments: Segments) {
    this.#total = segments.getSegmentByKey(SEGMENT_KEYS.CONVERSIONS)
    this.#first = segments.getSegmentByKey(SEGMENT_KEYS.FIRST_CONVERSION)
    this.#last = segments.getSegmentByKey(SEGMENT_KEYS.LAST_CONVERSION)
  }

  get count(): any {
    return this.#total.value
  }

  get first(): any {
    return this.#first.value
  }

  get firstDate(): any {
    return new Date(this.first * 1000)
  }

  get last(): any {
    return this.#last.value
  }

  get lastDate(): any {
    return new Date(this.last * 1000)
  }

  update(): void {
    this.#first.setValue()
    this.#last.setValue()
    this.#total.setValue()
  }

  reset(): void {
    this.#first.reset()
    this.#last.reset()
    this.#total.reset()
  }
}
