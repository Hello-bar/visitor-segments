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
var _Conversions_total, _Conversions_first, _Conversions_last;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversions = void 0;
const segmentMaps_1 = require("./segmentMaps");
class Conversions {
    constructor(segments) {
        _Conversions_total.set(this, void 0);
        _Conversions_first.set(this, void 0);
        _Conversions_last.set(this, void 0);
        __classPrivateFieldSet(this, _Conversions_total, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.CONVERSIONS), "f");
        __classPrivateFieldSet(this, _Conversions_first, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.FIRST_CONVERSION), "f");
        __classPrivateFieldSet(this, _Conversions_last, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.LAST_CONVERSION), "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _Conversions_total, "f").value;
    }
    get first() {
        return __classPrivateFieldGet(this, _Conversions_first, "f").value;
    }
    get firstDate() {
        if (!this.first)
            return undefined;
        return new Date(this.first * 1000);
    }
    get last() {
        return __classPrivateFieldGet(this, _Conversions_last, "f").value;
    }
    get lastDate() {
        if (!this.last)
            return undefined;
        return new Date(this.last * 1000);
    }
    update() {
        __classPrivateFieldGet(this, _Conversions_first, "f").setValue();
        __classPrivateFieldGet(this, _Conversions_last, "f").setValue();
        __classPrivateFieldGet(this, _Conversions_total, "f").setValue();
    }
    reset() {
        __classPrivateFieldGet(this, _Conversions_first, "f").reset();
        __classPrivateFieldGet(this, _Conversions_last, "f").reset();
        __classPrivateFieldGet(this, _Conversions_total, "f").reset();
    }
}
exports.Conversions = Conversions;
_Conversions_total = new WeakMap(), _Conversions_first = new WeakMap(), _Conversions_last = new WeakMap();
