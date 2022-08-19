"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstConversion = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class FirstConversion extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.FIRST_CONVERSION, visitor);
    }
    setValue(value) {
        super.setValueOnce(value || this.now());
    }
}
exports.FirstConversion = FirstConversion;
