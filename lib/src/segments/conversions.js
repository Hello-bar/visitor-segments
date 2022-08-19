"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversions = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Conversions extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.CONVERSIONS, visitor);
    }
    get value() {
        return super.value || 0;
    }
    setValue() {
        super.setValue(this.value + 1);
    }
}
exports.Conversions = Conversions;
