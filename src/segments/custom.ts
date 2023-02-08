import { SEGMENT_KEYS } from '../segmentMaps';
import { ValueStorageInterface } from '../lib/interfaces';
import { Segment } from '../segment';

export class Custom extends Segment {
  readonly #handlers: ((key: string, value: string) => void)[] = [];

  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.CUSTOM, visitor);
  }

  get value() {
    return super.value || {};
  }

  setValue(key:string, value?:any):void {
    if (this.value[key] !== value) {
      super.setValue({ ...this.value, [key]: value });
      this.#handlers.forEach((handler) => handler.call(handler.prototype, key, value));
    } else {
      super.setValue({ ...this.value, [key]: value });
    }
  }

  onUpdate(handler: (key: string, value: string) => void): void {
    this.#handlers.push(handler);
  }
}
