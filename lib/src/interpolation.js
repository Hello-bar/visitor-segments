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
var _Interpolation_segments;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpolation = void 0;
class Interpolation {
    constructor(segments) {
        _Interpolation_segments.set(this, void 0);
        __classPrivateFieldSet(this, _Interpolation_segments, segments, "f");
    }
    // Usage:
    //    segments.set('name', 'Anton')
    //    segments.visits.count => 999
    //    systemTags("%{name} visited %{visits.count} times") #> "Anton visited 999 times"
    run(input) {
        return this.customTags(this.systemTags(input));
    }
    // Usage:
    //    segments.set('name', 'Anton')
    //    customTags("%{name}") #> "Anton"
    customTags(input) {
        return this.runMatches(input, /%{(\w+)}/g, (name) => {
            const [tag, key] = name;
            const value = this.getCustomValue(key);
            return [tag, value];
        });
    }
    // Usage:
    //    segments.visits.count => 999
    //    systemTags("%{visits.count}") #> "999"
    systemTags(input) {
        return this.runMatches(input, /%{(\w+)\.(\w+)}/g, (name) => {
            const [tag, module, key] = name;
            const value = this.getModuleValue(module, key);
            return [tag, value];
        });
    }
    runMatches(input, regexp, tagAndValue) {
        let output = input;
        let match;
        while ((match = regexp.exec(input)) !== null) {
            const [tag, value] = tagAndValue(match);
            output = output.replace(tag, value);
        }
        return output;
    }
    getModuleValue(module, key) {
        const tag = `${module}.${key}`;
        // @ts-ignore
        return this.safeValue(tag, () => __classPrivateFieldGet(this, _Interpolation_segments, "f")[module][key]);
    }
    getCustomValue(key) {
        return this.safeValue(key, () => __classPrivateFieldGet(this, _Interpolation_segments, "f").get(key));
    }
    safeValue(key, getter) {
        let value;
        try {
            value = getter();
        }
        catch (e) {
            console.log(e, `can't interpolate %{${key}} tag`);
            value = '';
        }
        return value || '';
    }
}
exports.Interpolation = Interpolation;
_Interpolation_segments = new WeakMap();
