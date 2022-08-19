import { StoredValueInterface } from '../lib/interfaces';

export class StoredValue implements StoredValueInterface {
  value: any;
  expiration: Date;

  constructor(json: string) {
    const { value, expiration } = JSON.parse(json);
    this.value = value;
    this.expiration = new Date(expiration);
  }

  isExpired(): boolean {
    if (this.expiration) {
      return this.expiration < new Date();
    }
    return false;
  }
}
