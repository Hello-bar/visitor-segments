import { StorageAdapter } from '../lib/interfaces';
import { StoredValue } from './storedValue';
import { MINUTE } from '../lib/dateUtils';

export class ValueStorage {
  adapter: StorageAdapter;
  private readonly expiresInMs: number;

  constructor(adapter: StorageAdapter, expiresInMinutes: number) {
    this.adapter = adapter;
    this.expiresInMs = expiresInMinutes * MINUTE;
  }

  private get expiration(): string {
    const date = new Date();
    date.setTime(date.getTime() + this.expiresInMs);
    return date.toISOString();
  }

  setValue(key: string, value: any) {
    this.adapter.setValue(key, {
      value,
      expiration: this.expiration,
    });
  }

  getValue(key: string) {
    const json = this.adapter.getValue(key);

    if (json) {
      const value: StoredValue = new StoredValue(json);

      if (value.isExpired()) {
        this.removeValue(key);
        return undefined;
      } else {
        return value.value;
      }
    }

    return undefined;
  }

  removeValue(key: string) {
    return this.adapter.removeValue(key);
  }
}
