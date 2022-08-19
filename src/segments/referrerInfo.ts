import { getTLD } from './getTLD';
import paramsFromString from './paramsFromString';

type ReferrerInfo = {
  referrer: string;
  domain: string;
  isExternal: boolean;
  searchTerms: string;
};

export default function referrerInfo(): ReferrerInfo | null {
  const tld = getTLD().toLowerCase();

  if (!document.referrer) return null;

  // Check to ensure that the tld is not present in the
  const referrer = `${document.referrer}`
    .replace(/.*?\:\/\//, '')
    .replace(/www\./i, '')
    .toLowerCase()
    .substring(0, 150);

  const domain = referrer.replace(/(.*?)\/.*/, '$1');
  const params = paramsFromString(referrer.split('?')[1]);
  const terms = params.query || params.q || params.search;

  return {
    referrer,
    domain,
    isExternal: domain.indexOf(tld) === -1,
    searchTerms: terms,
  };
}
