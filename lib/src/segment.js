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
var _Segment_key, _Segment_visitor;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
class Segment {
    constructor(key, visitor) {
        _Segment_key.set(this, void 0);
        _Segment_visitor.set(this, void 0);
        __classPrivateFieldSet(this, _Segment_visitor, visitor, "f");
        __classPrivateFieldSet(this, _Segment_key, key, "f");
    }
    get key() {
        return __classPrivateFieldGet(this, _Segment_key, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _Segment_visitor, "f").getValue(this.key);
    }
    setValue(value) {
        __classPrivateFieldGet(this, _Segment_visitor, "f").setValue(this.key, value);
    }
    reset(_value) {
        this.removeValue();
    }
    removeValue() {
        __classPrivateFieldGet(this, _Segment_visitor, "f").removeValue(this.key);
    }
    setValueOnce(value) {
        __classPrivateFieldGet(this, _Segment_visitor, "f").setValueOnce(this.key, value);
    }
    now() {
        return __classPrivateFieldGet(this, _Segment_visitor, "f").now();
    }
    defaultValue() {
        // to be implemented
    }
}
exports.Segment = Segment;
_Segment_key = new WeakMap(), _Segment_visitor = new WeakMap();
