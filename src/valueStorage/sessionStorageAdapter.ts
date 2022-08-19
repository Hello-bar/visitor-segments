import { StorageAdapter } from '../lib/interfaces';

export class SessionStorageAdapter implements StorageAdapter {
  #sessionStorage: Storage;

  constructor() {
    this.#sessionStorage = window.sessionStorage;
  }

  setValue(key: string, value: any) {
    this.#sessionStorage.setItem(key, JSON.stringify(value));
  }

  getValue(key: string): any {
    return this.#sessionStorage.getItem(key);
  }

  removeValue(key: string) {
    this.#sessionStorage.removeItem(key);
  }
}
