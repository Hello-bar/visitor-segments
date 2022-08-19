import {ValueStorageInterface} from "./lib/interfaces";

export abstract class Segment {
  readonly #key: string;
  #visitor: ValueStorageInterface;

  constructor(key: string, visitor: ValueStorageInterface) {
    this.#visitor = visitor
    this.#key = key;
  }

  get key (): string {
    return this.#key
  }

  get value(): any {
    return this.#visitor.getValue(this.key)
  }

  setValue(value?: any): void {
    this.#visitor.setValue(this.key, value)
  }

  reset(_value?: any): void {
    this.removeValue()
  }

  protected removeValue(): void {
    this.#visitor.removeValue(this.key)
  }

  protected setValueOnce(value: any): void {
    this.#visitor.setValueOnce(this.key, value)
  }

  protected now (): number {
    return this.#visitor.now()
  }

  protected defaultValue(): any {
    // to be implemented
  }
}

