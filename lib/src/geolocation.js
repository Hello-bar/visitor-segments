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
var _GeoLocation_city, _GeoLocation_region, _GeoLocation_country, _GeoLocation_adapter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoLocation = void 0;
const segmentMaps_1 = require("./segmentMaps");
const interfaces_1 = require("./lib/interfaces");
class GeoLocation {
    constructor(segments, adapter) {
        _GeoLocation_city.set(this, void 0);
        _GeoLocation_region.set(this, void 0);
        _GeoLocation_country.set(this, void 0);
        _GeoLocation_adapter.set(this, void 0);
        __classPrivateFieldSet(this, _GeoLocation_city, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.CITY), "f");
        __classPrivateFieldSet(this, _GeoLocation_region, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.REGION), "f");
        __classPrivateFieldSet(this, _GeoLocation_country, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.COUNTRY), "f");
        __classPrivateFieldSet(this, _GeoLocation_adapter, adapter, "f");
    }
    get city() {
        return __classPrivateFieldGet(this, _GeoLocation_city, "f").value;
    }
    get region() {
        return __classPrivateFieldGet(this, _GeoLocation_region, "f").value;
    }
    get country() {
        return __classPrivateFieldGet(this, _GeoLocation_country, "f").value;
    }
    async update() {
        const info = await __classPrivateFieldGet(this, _GeoLocation_adapter, "f").getLocationInfo();
        if (info.status === interfaces_1.GEO_INFO_STATUSES.success) {
            __classPrivateFieldGet(this, _GeoLocation_city, "f").setValue(info.city);
            __classPrivateFieldGet(this, _GeoLocation_region, "f").setValue(info.region);
            __classPrivateFieldGet(this, _GeoLocation_country, "f").setValue(info.countryCode);
        }
    }
    reset() {
        __classPrivateFieldGet(this, _GeoLocation_city, "f").reset();
        __classPrivateFieldGet(this, _GeoLocation_region, "f").reset();
        __classPrivateFieldGet(this, _GeoLocation_country, "f").reset();
    }
}
exports.GeoLocation = GeoLocation;
_GeoLocation_city = new WeakMap(), _GeoLocation_region = new WeakMap(), _GeoLocation_country = new WeakMap(), _GeoLocation_adapter = new WeakMap();
