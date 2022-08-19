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
var _Params_campaign, _Params_content, _Params_medium, _Params_source, _Params_term, _Params_params;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const segmentMaps_1 = require("./segmentMaps");
class Params {
    constructor(segments) {
        _Params_campaign.set(this, void 0);
        _Params_content.set(this, void 0);
        _Params_medium.set(this, void 0);
        _Params_source.set(this, void 0);
        _Params_term.set(this, void 0);
        _Params_params.set(this, void 0);
        __classPrivateFieldSet(this, _Params_campaign, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.AD_CAMPAIGN), "f");
        __classPrivateFieldSet(this, _Params_content, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.AD_CONTENT), "f");
        __classPrivateFieldSet(this, _Params_medium, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.AD_MEDIUM), "f");
        __classPrivateFieldSet(this, _Params_source, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.AD_SOURCE), "f");
        __classPrivateFieldSet(this, _Params_term, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.AD_TERM), "f");
        __classPrivateFieldSet(this, _Params_params, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.PARAMS), "f");
    }
    get campaign() {
        return __classPrivateFieldGet(this, _Params_campaign, "f").value;
    }
    get content() {
        return __classPrivateFieldGet(this, _Params_content, "f").value;
    }
    get medium() {
        return __classPrivateFieldGet(this, _Params_medium, "f").value;
    }
    get source() {
        return __classPrivateFieldGet(this, _Params_source, "f").value;
    }
    get term() {
        return __classPrivateFieldGet(this, _Params_term, "f").value;
    }
    get all() {
        return __classPrivateFieldGet(this, _Params_params, "f").value;
    }
    update() {
        const params = paramsFromString(location.search);
        __classPrivateFieldGet(this, _Params_campaign, "f").setValue(params.utm_campaign);
        __classPrivateFieldGet(this, _Params_content, "f").setValue(params.utm_content);
        __classPrivateFieldGet(this, _Params_medium, "f").setValue(params.utm_medium);
        __classPrivateFieldGet(this, _Params_source, "f").setValue(params.utm_source);
        __classPrivateFieldGet(this, _Params_term, "f").setValue(params.utm_term);
        __classPrivateFieldGet(this, _Params_params, "f").setValue(params);
    }
    reset() {
        __classPrivateFieldGet(this, _Params_campaign, "f").reset();
        __classPrivateFieldGet(this, _Params_content, "f").reset();
        __classPrivateFieldGet(this, _Params_medium, "f").reset();
        __classPrivateFieldGet(this, _Params_source, "f").reset();
        __classPrivateFieldGet(this, _Params_term, "f").reset();
        __classPrivateFieldGet(this, _Params_params, "f").reset();
    }
}
exports.Params = Params;
_Params_campaign = new WeakMap(), _Params_content = new WeakMap(), _Params_medium = new WeakMap(), _Params_source = new WeakMap(), _Params_term = new WeakMap(), _Params_params = new WeakMap();
function paramsFromString(string) {
    return Object.fromEntries(new URLSearchParams(string));
}
