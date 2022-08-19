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
var _Session_sessions, _Session_sessionUUID, _Session_sessionHolder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
const segmentMaps_1 = require("./segmentMaps");
const valueStorage_1 = require("./valueStorage");
const localStorageAdapter_1 = require("./valueStorage/localStorageAdapter");
class Session {
    constructor(segments) {
        _Session_sessions.set(this, void 0);
        _Session_sessionUUID.set(this, void 0);
        _Session_sessionHolder.set(this, void 0);
        __classPrivateFieldSet(this, _Session_sessions, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.SESSIONS), "f");
        __classPrivateFieldSet(this, _Session_sessionUUID, segments.getSegmentByKey(segmentMaps_1.SEGMENT_KEYS.SESSION_UUID), "f");
        __classPrivateFieldSet(this, _Session_sessionHolder, new valueStorage_1.ValueStorage(new localStorageAdapter_1.LocalStorageAdapter(), 60), "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _Session_sessions, "f").value || 0;
    }
    get uuid() {
        return __classPrivateFieldGet(this, _Session_sessionUUID, "f").value;
    }
    end() {
        __classPrivateFieldGet(this, _Session_sessionHolder, "f").removeValue(__classPrivateFieldGet(this, _Session_sessionUUID, "f").value);
        __classPrivateFieldGet(this, _Session_sessionUUID, "f").reset();
    }
    update() {
        __classPrivateFieldGet(this, _Session_sessionUUID, "f").setValue();
        if (!__classPrivateFieldGet(this, _Session_sessionHolder, "f").getValue(__classPrivateFieldGet(this, _Session_sessionUUID, "f").value)) {
            __classPrivateFieldGet(this, _Session_sessionUUID, "f").reset();
            __classPrivateFieldGet(this, _Session_sessionHolder, "f").setValue(__classPrivateFieldGet(this, _Session_sessionUUID, "f").value, new Date().getTime());
            __classPrivateFieldGet(this, _Session_sessions, "f").setValue();
        }
        else if (this.count === 0) {
            __classPrivateFieldGet(this, _Session_sessions, "f").setValue();
        }
    }
    reset() {
        __classPrivateFieldGet(this, _Session_sessions, "f").reset();
        __classPrivateFieldGet(this, _Session_sessionUUID, "f").reset();
    }
}
exports.Session = Session;
_Session_sessions = new WeakMap(), _Session_sessionUUID = new WeakMap(), _Session_sessionHolder = new WeakMap();
