import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces";

export class SessionUUID extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.SESSION_UUID, visitor);
  }

  get value(): string {
    if (!super.value) {
      this.setValue()
    }
    return super.value
  }

  setValue(value?: any) {
    super.setValueOnce(value || this.generateUUID());
  }

  reset() {
    super.reset();
    super.setValue();
  }

  private generateUUID(): string {
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
