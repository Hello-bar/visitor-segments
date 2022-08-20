import { Visitor } from './visitor';
import { buildSegments, SEGMENTS } from './segmentMaps';
import { Segment } from './segment';
import { SegmentsAdapters, SegmentsInterface } from './lib/interfaces';
import { Interpolation } from './interpolation';
import { LocalStorageAdapter } from './valueStorage/localStorageAdapter';
import { Custom } from './segments/custom';

export abstract class AbstractSegments implements SegmentsInterface {
  readonly #segments: { [key: string]: Segment };
  readonly #visitor: Visitor;
  readonly #interpolation: Interpolation;
  readonly #handlers: ((key: string, value: string) => void)[] = [];
  readonly #custom: Segment;

  protected constructor(scope: string, options?: SegmentsAdapters) {
    const storageAdapter = options?.storageAdapter || LocalStorageAdapter;

    this.#visitor = new Visitor(scope, storageAdapter);
    this.#segments = buildSegments(options?.segmentsMap || SEGMENTS, this.#visitor);
    this.#interpolation = new Interpolation(this);
    this.#custom = new Custom(this.#visitor);
  }

  onUpdate(handler: (key: string, value: string) => void): void {
    this.#handlers.push(handler);
  }

  interpolate(input: string) {
    return this.#interpolation.run(input);
  }

  set(key: string, value: any) {
    this.#custom.setValue({ ...this.#custom.value, [key]: value });
    this.#handlers.forEach((handler) => handler.call(handler.prototype, key, value));
  }

  get(key: string) {
    return this.#custom.value[key];
  }

  async visit() {
    return new Promise<void>((resolve, _reject) => {
      resolve();
    });
  }

  abstract convert(): void;

  reset(): void {
    this.#custom.reset();
  }

  clear() {
    this.#visitor.clear();
  }

  getSegmentByKey(key: string): Segment {
    return this.#segments[key];
  }
}
