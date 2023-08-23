import { AdBlockerInfo, AdBlockProviderAdapter } from '../lib/interfaces';

export class AdBlockerTestProvider implements AdBlockProviderAdapter {
  info: AdBlockerInfo | any = { isEnabled: false };

  set(key: any, value: any) {
    this.info[key] = value;
  }

  async getAdBlockerInfo() {
    return this.info;
  }
}
