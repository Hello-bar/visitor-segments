import { Visitor } from './visitor';
import { buildSegments, SEGMENTS } from './segmentMaps';
import { Segment } from './segment';
import {DataStorage, SegmentsAdapters, SegmentsInterface} from './lib/interfaces';
import { Interpolation } from './interpolation';
import { LocalStorageAdapter } from './valueStorage/localStorageAdapter';
import { Custom } from './segments/custom';

export abstract class AbstractSegments implements SegmentsInterface {
  readonly #segments: { [key: string]: Segment };
  readonly #visitor: Visitor;
  readonly #interpolation: Interpolation;
  readonly #custom: Custom;
  #storage: DataStorage | undefined;

  protected constructor(scope: string, options?: SegmentsAdapters) {
    const storageAdapter = options?.storageAdapter || LocalStorageAdapter;
    this.#storage = options?.extraStorage
    this.#visitor = new Visitor(scope, storageAdapter);
    this.#segments = buildSegments(options?.segmentsMap || SEGMENTS, this.#visitor);
    this.#interpolation = new Interpolation(this);
    this.#custom = new Custom(this.#visitor);
  }

  onUpdate(handler: (key: string, value: string) => void): void {
    this.#visitor.onUpdate(handler);
    this.#custom.onUpdate(handler);
  }

  get visitor():Visitor {
    return this.#visitor
  }

  interpolate(input: string) {
    return this.#interpolation.run(input);
  }

  set(key: string, value: any) {
    this.#custom.setValue(key, value);
  }

  get(key: string) {
    return this.#custom.value[key] || this.#storage?.get(key);
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
