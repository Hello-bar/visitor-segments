"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTerm = void 0;
const segmentMaps_1 = require("../segmentMaps");
const adSegment_1 = require("./adSegment");
class AdTerm extends adSegment_1.AdSegment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.AD_TERM, visitor);
    }
}
exports.AdTerm = AdTerm;
