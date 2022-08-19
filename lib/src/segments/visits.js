"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visits = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Visits extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.VISITS, visitor);
    }
    get value() {
        return super.value || 0;
    }
    setValue(value) {
        super.setValue(value || this.value + 1);
    }
}
exports.Visits = Visits;
