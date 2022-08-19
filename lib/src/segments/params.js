"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Params extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.PARAMS, visitor);
    }
    setValue(value) {
        if (value) {
            super.setValue(value);
        }
    }
}
exports.Params = Params;
