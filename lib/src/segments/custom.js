"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Custom = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Custom extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.CUSTOM, visitor);
    }
    get value() {
        return super.value || {};
    }
}
exports.Custom = Custom;
