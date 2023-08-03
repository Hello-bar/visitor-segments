// This code returns the root domain of the current site so "www.yahoo.co.jp" will return "yahoo.co.jp" and "blog.kissmetrics.com
// will return kissmetrics.com. It does so by setting a cookie on each "part" until successful (first tries ".jp" then ".co.jp"
// then "yahoo.co.jp"
export function getTLD() {
  let i;
  let h;
  const wc = 'tld=ck';
  const hostname = document.location.hostname.split('.');

  for (i = hostname.length - 1; i >= 0; i--) {
    h = hostname.slice(i).join('.');
    document.cookie = `${wc};domain=.${h};`;
    if (document.cookie.indexOf(wc) > -1) {
      document.cookie = `${wc.split('=')[0]}=;domain=.${h};expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      return h;
    }
  }
  return document.location.hostname;
}
