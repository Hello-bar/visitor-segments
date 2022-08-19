"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sessions = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Sessions extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.SESSIONS, visitor);
    }
    get value() {
        return super.value || 0;
    }
    setValue(value) {
        super.setValue(value || this.value + 1);
    }
    reset() {
        super.reset();
        super.setValue(0);
    }
}
exports.Sessions = Sessions;
