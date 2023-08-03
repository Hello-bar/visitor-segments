function jsonVal(val: string) {
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
}

function parseKeyValue(cookie: string) {
  const [key, val] = cookie.trim().split('=').map(decodeURIComponent);
  return {
    [key]: jsonVal(val),
  };
}

export function parseCookies() {
  if (document.cookie.length === 0) return {};

  return document.cookie.split(';').reduce((res, c) => Object.assign(res, parseKeyValue(c)), {});
}
