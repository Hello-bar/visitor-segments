import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class Cookies extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.COOKIES, visitor);
  }

  get value(): {} | null {
    return super.value
  }

  setValue(value?: any) {
    if (value || this.defaultValue()) {
      super.setValue(value || this.defaultValue());
    }
  }

  protected defaultValue(): {} {
    return cookiesObject()
  }
}

function booleanOrVal(val: string) {
  try {
    if (typeof JSON.parse(val) === "boolean") {
      return val.toString()
    } else {
      return JSON.parse(val)
    }
  } catch (e) {
    return val
  }
}

function parseKeyValue(cookie: string) {
  const [key, val] = cookie.trim().split('=').map(decodeURIComponent)
  const allNumbers = (str: string) => /^\d+$/.test(str);
  return {
    [key]: allNumbers(val) ? val : booleanOrVal(val)
  }
}

function cookiesObject() {
  return document.cookie
    .split(';')
    .reduce((res, c) => Object.assign(res, parseKeyValue(c)), {})
}
