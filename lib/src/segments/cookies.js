"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Cookies extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.COOKIES, visitor);
    }
    get value() {
        return super.value;
    }
    setValue(value) {
        if (value || this.defaultValue()) {
            super.setValue(value || this.defaultValue());
        }
    }
    defaultValue() {
        return cookiesObject();
    }
}
exports.Cookies = Cookies;
function booleanOrVal(val) {
    try {
        if (typeof JSON.parse(val) === "boolean") {
            return val.toString();
        }
        else {
            return JSON.parse(val);
        }
    }
    catch (e) {
        return val;
    }
}
function parseKeyValue(cookie) {
    const [key, val] = cookie.trim().split('=').map(decodeURIComponent);
    const allNumbers = (str) => /^\d+$/.test(str);
    return {
        [key]: allNumbers(val) ? val : booleanOrVal(val)
    };
}
function cookiesObject() {
    if (document.cookie.length === 0)
        return {};
    return document.cookie
        .split(';')
        .reduce((res, c) => Object.assign(res, parseKeyValue(c)), {});
}
