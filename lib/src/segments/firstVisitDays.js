"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstVisitDays = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
const dateUtils_1 = require("../lib/dateUtils");
class FirstVisitDays extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.FIRST_VISIT_DAYS, visitor);
    }
    setValue(firstVisit) {
        super.setValue(Math.round((this.now() - firstVisit) / dateUtils_1.DAY));
    }
    reset(value) {
        super.reset();
        this.setValue(value);
    }
}
exports.FirstVisitDays = FirstVisitDays;
