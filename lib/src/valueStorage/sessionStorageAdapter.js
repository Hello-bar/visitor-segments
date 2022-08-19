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
var _SessionStorageAdapter_sessionStorage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorageAdapter = void 0;
class SessionStorageAdapter {
    constructor() {
        _SessionStorageAdapter_sessionStorage.set(this, void 0);
        __classPrivateFieldSet(this, _SessionStorageAdapter_sessionStorage, window.sessionStorage, "f");
    }
    setValue(key, value) {
        __classPrivateFieldGet(this, _SessionStorageAdapter_sessionStorage, "f").setItem(key, JSON.stringify(value));
    }
    getValue(key) {
        return __classPrivateFieldGet(this, _SessionStorageAdapter_sessionStorage, "f").getItem(key);
    }
    removeValue(key) {
        __classPrivateFieldGet(this, _SessionStorageAdapter_sessionStorage, "f").removeItem(key);
    }
}
exports.SessionStorageAdapter = SessionStorageAdapter;
_SessionStorageAdapter_sessionStorage = new WeakMap();
