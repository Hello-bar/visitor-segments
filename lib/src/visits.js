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
var _Visits_firstVisit, _Visits_firstVisitDays, _Visits_lastVisit, _Visits_lastVisitDays, _Visits_visits;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visits = void 0;
const segmentMaps_1 = require("./segmentMaps");
class Visits {
    constructor(segments) {
        _Visits_firstVisit.set(this, void 0);
        _Visits_firstVisitDays.set(this, void 0);
        _Visits_lastVisit.set(this, void 0);
        _Visits_lastVisitDays.set(this, void 0);
        _Visits_visits.set(this, void 0);
        __classPrivateFieldSet(this, _Visits_firstVisit, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.FIRST_VISIT), "f");
        __classPrivateFieldSet(this, _Visits_firstVisitDays, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.FIRST_VISIT_DAYS), "f");
        __classPrivateFieldSet(this, _Visits_lastVisit, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.LAST_VISIT), "f");
        __classPrivateFieldSet(this, _Visits_lastVisitDays, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.LAST_VISIT_DAYS), "f");
        __classPrivateFieldSet(this, _Visits_visits, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.VISITS), "f");
    }
    get first() {
        return __classPrivateFieldGet(this, _Visits_firstVisit, "f").value;
    }
    get firstDate() {
        if (!this.first)
            return undefined;
        return new Date(this.first * 1000);
    }
    get last() {
        return __classPrivateFieldGet(this, _Visits_lastVisit, "f").value;
    }
    get lastDate() {
        if (!this.last)
            return undefined;
        return new Date(this.last * 1000);
    }
    get daysFromFirst() {
        return __classPrivateFieldGet(this, _Visits_firstVisitDays, "f").value || 0;
    }
    get daysFromLast() {
        return __classPrivateFieldGet(this, _Visits_lastVisitDays, "f").value || 0;
    }
    get count() {
        return __classPrivateFieldGet(this, _Visits_visits, "f").value;
    }
    update() {
        __classPrivateFieldGet(this, _Visits_firstVisit, "f").setValue();
        __classPrivateFieldGet(this, _Visits_firstVisitDays, "f").setValue(this.first);
        __classPrivateFieldGet(this, _Visits_lastVisitDays, "f").setValue(this.last);
        __classPrivateFieldGet(this, _Visits_lastVisit, "f").setValue();
        __classPrivateFieldGet(this, _Visits_visits, "f").setValue();
    }
    reset() {
        __classPrivateFieldGet(this, _Visits_firstVisit, "f").reset();
        __classPrivateFieldGet(this, _Visits_firstVisitDays, "f").reset(__classPrivateFieldGet(this, _Visits_firstVisit, "f").value);
        __classPrivateFieldGet(this, _Visits_lastVisit, "f").reset();
        __classPrivateFieldGet(this, _Visits_lastVisitDays, "f").reset(__classPrivateFieldGet(this, _Visits_lastVisit, "f").value);
        __classPrivateFieldGet(this, _Visits_visits, "f").reset();
    }
}
exports.Visits = Visits;
_Visits_firstVisit = new WeakMap(), _Visits_firstVisitDays = new WeakMap(), _Visits_lastVisit = new WeakMap(), _Visits_lastVisitDays = new WeakMap(), _Visits_visits = new WeakMap();
