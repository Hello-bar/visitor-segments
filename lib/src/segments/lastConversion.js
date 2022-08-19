"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastConversion = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class LastConversion extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.LAST_CONVERSION, visitor);
    }
    setValue(value) {
        super.setValue(value || this.now());
    }
}
exports.LastConversion = LastConversion;
