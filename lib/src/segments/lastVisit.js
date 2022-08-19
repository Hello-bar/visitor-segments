"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastVisit = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class LastVisit extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.LAST_VISIT, visitor);
    }
    setValue() {
        super.setValue(this.now());
    }
}
exports.LastVisit = LastVisit;
