"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginalReferrer = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class OriginalReferrer extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.ORIGINAL_REFERRER, visitor);
    }
    setValue(value) {
        super.setValueOnce(value);
    }
}
exports.OriginalReferrer = OriginalReferrer;
