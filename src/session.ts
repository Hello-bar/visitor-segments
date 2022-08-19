import {Segments} from "./index";
import {SEGMENT_KEYS} from "./segmentMaps";
import {Sessions} from "./segments/sessions";
import {ValueStorage} from "./valueStorage";
import {SessionUUID} from "./segments/sessionUUID";
import {LocalStorageAdapter} from "./valueStorage/localStorageAdapter";
import {SegmentsFacade} from "./lib/interfaces";

export class Session implements SegmentsFacade {
  #sessions: Sessions;
  #sessionUUID: SessionUUID;
  #sessionHolder: ValueStorage;

  constructor(segments: Segments) {
    this.#sessions = segments.getSegmentByKey(SEGMENT_KEYS.SESSIONS)
    this.#sessionUUID = segments.getSegmentByKey(SEGMENT_KEYS.SESSION_UUID) as SessionUUID
    this.#sessionHolder = new ValueStorage(new LocalStorageAdapter(), 60)
  }

  get count() {
    return this.#sessions.value
  }

  get uuid() {
    return this.#sessionUUID.value
  }

  end() {
    this.#sessionHolder.removeValue(this.#sessionUUID.value)
    this.#sessionUUID.reset()
  }

  update () {
    this.#sessionUUID.setValue()
    if (!this.#sessionHolder.getValue(this.#sessionUUID.value)) {
      this.#sessionUUID.reset()
      this.#sessionHolder.setValue(this.#sessionUUID.value, new Date().getTime())
      this.#sessions.setValue()
    } else if (this.count === 0) {
      this.#sessions.setValue()
    }
  }

  reset () {
    this.#sessions.reset()
    this.#sessionUUID.reset()
  }
}