"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Page_device, _Page_cookies, _Page_date, _Page_dayOfWeek, _Page_path, _Page_keywords, _Page_wpTags;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const segmentMaps_1 = require("./segmentMaps");
class Page {
    constructor(segments) {
        _Page_device.set(this, void 0);
        _Page_cookies.set(this, void 0);
        _Page_date.set(this, void 0);
        _Page_dayOfWeek.set(this, void 0);
        _Page_path.set(this, void 0);
        _Page_keywords.set(this, void 0);
        _Page_wpTags.set(this, void 0);
        __classPrivateFieldSet(this, _Page_device, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.DEVICE), "f");
        __classPrivateFieldSet(this, _Page_cookies, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.COOKIES), "f");
        __classPrivateFieldSet(this, _Page_date, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.DATE), "f");
        __classPrivateFieldSet(this, _Page_dayOfWeek, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.DAY_OF_WEEK), "f");
        __classPrivateFieldSet(this, _Page_path, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.PAGE_PATH), "f");
        __classPrivateFieldSet(this, _Page_keywords, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.URL_KEYWORDS), "f");
        __classPrivateFieldSet(this, _Page_wpTags, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.WORDPRESS_TAGS), "f");
    }
    get device() {
        return __classPrivateFieldGet(this, _Page_device, "f").value;
    }
    get cookies() {
        return __classPrivateFieldGet(this, _Page_cookies, "f").value;
    }
    get date() {
        return __classPrivateFieldGet(this, _Page_date, "f").value;
    }
    get dayOfWeek() {
        return __classPrivateFieldGet(this, _Page_dayOfWeek, "f").value;
    }
    get path() {
        return __classPrivateFieldGet(this, _Page_path, "f").value;
    }
    get urlKeywords() {
        return __classPrivateFieldGet(this, _Page_keywords, "f").value;
    }
    get wordpressTags() {
        return __classPrivateFieldGet(this, _Page_wpTags, "f").value;
    }
    update() {
        __classPrivateFieldGet(this, _Page_device, "f").setValue();
        __classPrivateFieldGet(this, _Page_cookies, "f").setValue();
        __classPrivateFieldGet(this, _Page_date, "f").setValue();
        __classPrivateFieldGet(this, _Page_dayOfWeek, "f").setValue();
        __classPrivateFieldGet(this, _Page_path, "f").setValue();
        __classPrivateFieldGet(this, _Page_keywords, "f").setValue();
        __classPrivateFieldGet(this, _Page_wpTags, "f").setValue();
    }
    reset() {
        __classPrivateFieldGet(this, _Page_device, "f").reset();
        __classPrivateFieldGet(this, _Page_cookies, "f").reset();
        __classPrivateFieldGet(this, _Page_date, "f").reset();
        __classPrivateFieldGet(this, _Page_dayOfWeek, "f").reset();
        __classPrivateFieldGet(this, _Page_path, "f").reset();
        __classPrivateFieldGet(this, _Page_keywords, "f").reset();
        __classPrivateFieldGet(this, _Page_wpTags, "f").reset();
    }
}
exports.Page = Page;
_Page_device = new WeakMap(), _Page_cookies = new WeakMap(), _Page_date = new WeakMap(), _Page_dayOfWeek = new WeakMap(), _Page_path = new WeakMap(), _Page_keywords = new WeakMap(), _Page_wpTags = new WeakMap();
