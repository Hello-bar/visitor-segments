"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastVisitDays = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
const dateUtils_1 = require("../lib/dateUtils");
class LastVisitDays extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.LAST_VISIT_DAYS, visitor);
    }
    setValue(lastVisit) {
        if (lastVisit) {
            super.setValue(Math.round((this.now() - lastVisit) / dateUtils_1.DAY));
        }
        else {
            super.setValue(0);
        }
    }
    reset(value) {
        super.reset();
        this.setValue(value);
    }
}
exports.LastVisitDays = LastVisitDays;
