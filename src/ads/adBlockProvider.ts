import { AdBlockProviderAdapter, AdBlockerInfo } from '../lib/interfaces';

export class AdBlockProvider implements AdBlockProviderAdapter{
  static adBlockerCheckUrl: string;

  async loadScript() {
    return new Promise((resolve, reject) => {
      try {
        let adBlockScript = document.createElement('script');
        adBlockScript.src = AdBlockProvider.adBlockerCheckUrl;
        adBlockScript.async = false;
        adBlockScript.defer = false;
  
        adBlockScript.addEventListener('load', (ev) => {
          resolve({ isEnabled: false });
        });
  
        adBlockScript.addEventListener('error', (ev) => {
          reject({ isEnabled: true });
        });
  
        document.body.appendChild(adBlockScript);
      } catch (error) {
        reject(error);
      }
    });
  };
  
  async getAdBlockerInfo() {
    return await this.loadScript()
      .then((data) => {
        return data
      })
      .catch((err) => {
        return err
      });
  };
}
