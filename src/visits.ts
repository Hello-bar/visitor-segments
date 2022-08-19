import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {Visits as VisitsSegment} from "./segments/visits";
import {FirstVisit} from "./segments/firstVisit";
import {FirstVisitDays} from "./segments/firstVisitDays";
import {LastVisit} from "./segments/lastVisit";
import {LastVisitDays} from "./segments/lastVisitDays";
import {SegmentsFacade} from "./lib/interfaces";

export class Visits implements SegmentsFacade {
  #firstVisit: FirstVisit;
  #firstVisitDays: FirstVisitDays;
  #lastVisit: LastVisit;
  #lastVisitDays: LastVisitDays;
  #visits: VisitsSegment;

  constructor(segments: Segments) {
    this.#firstVisit = segments.getSegmentByKey(SEGMENT_KEYS.FIRST_VISIT)
    this.#firstVisitDays = segments.getSegmentByKey(SEGMENT_KEYS.FIRST_VISIT_DAYS)
    this.#lastVisit = segments.getSegmentByKey(SEGMENT_KEYS.LAST_VISIT)
    this.#lastVisitDays = segments.getSegmentByKey(SEGMENT_KEYS.LAST_VISIT_DAYS)
    this.#visits = segments.getSegmentByKey(SEGMENT_KEYS.VISITS)
  }

  get first(): any {
    return this.#firstVisit.value
  }

  get firstDate(): any {
    return new Date(this.first * 1000)
  }

  get last(): any {
    return this.#lastVisit.value
  }

  get lastDate(): any {
    return new Date(this.last * 1000)
  }

  get daysFromFirst(): any {
    return this.#firstVisitDays.value
  }

  get daysFromLast(): any {
    return this.#lastVisitDays.value
  }

  get count(): any {
    return this.#visits.value
  }

  update(): void {
    this.#firstVisit.setValue()
    this.#firstVisitDays.setValue(this.first)
    this.#lastVisit.setValue()
    this.#lastVisitDays.setValue(this.last)
    this.#visits.setValue()
  }

  reset(): void {
    this.#firstVisit.reset()
    this.#firstVisitDays.reset(this.#firstVisit.value)
    this.#lastVisit.reset()
    this.#lastVisitDays.reset(this.#lastVisit.value)
    this.#visits.reset()
  }
}