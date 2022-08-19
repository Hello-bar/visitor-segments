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
var _Segments_segments, _Segments_visitor, _Segments_interpolation, _Segments_handlers;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segments = void 0;
const visitor_1 = require("./visitor");
const visits_1 = require("./visits");
const segmentMaps_1 = require("./segmentMaps");
const session_1 = require("./session");
const params_1 = require("./params");
const geolocation_1 = require("./geolocation");
const referrer_1 = require("./referrer");
const page_1 = require("./page");
const conversions_1 = require("./conversions");
const interpolation_1 = require("./interpolation");
const localStorageAdapter_1 = require("./valueStorage/localStorageAdapter");
const ipapiProvider_1 = require("./geo/ipapiProvider");
class Segments {
    constructor(scope, options) {
        _Segments_segments.set(this, void 0);
        _Segments_visitor.set(this, void 0);
        _Segments_interpolation.set(this, void 0);
        _Segments_handlers.set(this, []);
        const storageAdapter = (options === null || options === void 0 ? void 0 : options.storageAdapter) || localStorageAdapter_1.LocalStorageAdapter;
        const geoAdapter = (options === null || options === void 0 ? void 0 : options.geoAdapter) || new ipapiProvider_1.IPApiProvider;
        __classPrivateFieldSet(this, _Segments_visitor, new visitor_1.Visitor(scope, storageAdapter), "f");
        __classPrivateFieldSet(this, _Segments_segments, (0, segmentMaps_1.buildSegments)(__classPrivateFieldGet(this, _Segments_visitor, "f")), "f");
        __classPrivateFieldSet(this, _Segments_interpolation, new interpolation_1.Interpolation(this), "f");
        this.visits = new visits_1.Visits(this);
        this.session = new session_1.Session(this);
        this.conversions = new conversions_1.Conversions(this);
        this.params = new params_1.Params(this);
        this.geolocation = new geolocation_1.GeoLocation(this, geoAdapter);
        this.referrer = new referrer_1.Referrer(this);
        this.page = new page_1.Page(this);
        this.custom = this.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.CUSTOM);
    }
    onUpdate(handler) {
        __classPrivateFieldGet(this, _Segments_handlers, "f").push(handler);
    }
    interpolate(input) {
        return __classPrivateFieldGet(this, _Segments_interpolation, "f").run(input);
    }
    set(key, value) {
        this.custom.setValue({ ...this.custom.value, [key]: value });
        __classPrivateFieldGet(this, _Segments_handlers, "f").forEach(handler => handler.call(handler.prototype, key, value));
    }
    get(key) {
        return this.custom.value[key];
    }
    async visit() {
        this.visits.update();
        this.session.update();
        this.params.update();
        this.referrer.update();
        this.page.update();
        await this.geolocation.update();
    }
    convert() {
        this.conversions.update();
    }
    reset() {
        this.geolocation.reset();
        this.visits.reset();
        this.session.reset();
        this.params.reset();
        this.referrer.reset();
        this.page.reset();
        this.conversions.reset();
    }
    clear() {
        __classPrivateFieldGet(this, _Segments_visitor, "f").clear();
    }
    getSegmentByKey(key) {
        return __classPrivateFieldGet(this, _Segments_segments, "f")[key];
    }
}
exports.Segments = Segments;
_Segments_segments = new WeakMap(), _Segments_visitor = new WeakMap(), _Segments_interpolation = new WeakMap(), _Segments_handlers = new WeakMap();
