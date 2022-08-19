import {now} from "./lib/dateUtils";
import {ValueStorage} from "./valueStorage";
import {StorageAdapterClass, ValueStorageInterface} from "./lib/interfaces";

type VisitorData = {
  [key: string]: string | number
}

const MINUTES_IN_DAY = 60 * 24

export class Visitor implements ValueStorageInterface {
  private readonly storage: ValueStorage;
  private readonly key: string;
  protected data: VisitorData;

  constructor(key: string, adapter: StorageAdapterClass, expiresInDays: number = 365 * 5) {
    this.storage = new ValueStorage(new adapter(), expiresInDays * MINUTES_IN_DAY)
    this.key = key
    this.data = {}
    this.load()
  }

  getValue(key: string): any {
    return this.data[key]
  }

  setValue(key: string, value: any): void {
    this.data[key] = value
    this.save()
  }

  setValueOnce(key: string, value: any): void {
    const currentValue = this.getValue(key)
    if (currentValue === null || currentValue === undefined) {
      this.setValue(key, value)
    }
  }

  removeValue(key: string): void {
    delete this.data[key]
    this.save()
  }

  now (): number {
    return now()
  }

  private save(): void {
    this.storage.setValue(this.key, this.data)
  }

  private load(): void {
    this.data = this.storage.getValue(this.key) || {}
  }
}