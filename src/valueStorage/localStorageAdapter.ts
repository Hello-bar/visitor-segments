import {StorageAdapter} from "../lib/interfaces";

export class LocalStorageAdapter implements StorageAdapter {
  #localStorage: Storage;

  constructor() {
    this.#localStorage = window.localStorage
  }

  setValue(key: string, value: any) {
    this.#localStorage.setItem(key, JSON.stringify(value))
  }

  getValue(key: string): any {
    return this.#localStorage.getItem(key)
  }

  removeValue(key: string) {
    this.#localStorage.removeItem(key)
  }
}
