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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Referrer_originalReferrer, _Referrer_referrer, _Referrer_referrerDomain, _Referrer_referrerTerms, _Referrer_previousPage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referrer = void 0;
const segmentMaps_1 = require("./segmentMaps");
const referrerInfo_1 = __importDefault(require("./segments/referrerInfo"));
class Referrer {
    constructor(segments) {
        _Referrer_originalReferrer.set(this, void 0);
        _Referrer_referrer.set(this, void 0);
        _Referrer_referrerDomain.set(this, void 0);
        _Referrer_referrerTerms.set(this, void 0);
        _Referrer_previousPage.set(this, void 0);
        __classPrivateFieldSet(this, _Referrer_originalReferrer, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.ORIGINAL_REFERRER), "f");
        __classPrivateFieldSet(this, _Referrer_referrer, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.REFERRER), "f");
        __classPrivateFieldSet(this, _Referrer_referrerDomain, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.REFERRER_DOMAIN), "f");
        __classPrivateFieldSet(this, _Referrer_referrerTerms, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.REFERRER_TERMS), "f");
        __classPrivateFieldSet(this, _Referrer_previousPage, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.PREVIOUS_PAGE), "f");
    }
    get originalReferrer() {
        return __classPrivateFieldGet(this, _Referrer_originalReferrer, "f").value;
    }
    get referrer() {
        return __classPrivateFieldGet(this, _Referrer_referrer, "f").value;
    }
    get referrerDomain() {
        return __classPrivateFieldGet(this, _Referrer_referrerDomain, "f").value;
    }
    get referrerTerms() {
        return __classPrivateFieldGet(this, _Referrer_referrerTerms, "f").value;
    }
    get previousPage() {
        return __classPrivateFieldGet(this, _Referrer_previousPage, "f").value;
    }
    update() {
        const info = (0, referrerInfo_1.default)();
        if (!info) {
            this.reset();
            return;
        }
        __classPrivateFieldGet(this, _Referrer_originalReferrer, "f").setValue(info.referrer);
        __classPrivateFieldGet(this, _Referrer_previousPage, "f").setValue(info.referrer);
        if (info.isExternal) {
            __classPrivateFieldGet(this, _Referrer_referrer, "f").setValue(info.referrer);
            __classPrivateFieldGet(this, _Referrer_referrerDomain, "f").setValue(info.domain);
            __classPrivateFieldGet(this, _Referrer_referrerTerms, "f").setValue(info.searchTerms);
        }
    }
    reset() {
        __classPrivateFieldGet(this, _Referrer_originalReferrer, "f").reset();
        __classPrivateFieldGet(this, _Referrer_referrer, "f").reset();
        __classPrivateFieldGet(this, _Referrer_referrerDomain, "f").reset();
        __classPrivateFieldGet(this, _Referrer_referrerTerms, "f").reset();
        __classPrivateFieldGet(this, _Referrer_previousPage, "f").reset();
    }
}
exports.Referrer = Referrer;
_Referrer_originalReferrer = new WeakMap(), _Referrer_referrer = new WeakMap(), _Referrer_referrerDomain = new WeakMap(), _Referrer_referrerTerms = new WeakMap(), _Referrer_previousPage = new WeakMap();
