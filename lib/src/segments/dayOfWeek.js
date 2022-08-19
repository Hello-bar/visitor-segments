"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfWeek = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class DayOfWeek extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.DAY_OF_WEEK, visitor);
    }
    get value() {
        return super.value;
    }
    setValue(value) {
        const nowDate = new Date();
        super.setValue(value || nowDate.getDay());
    }
}
exports.DayOfWeek = DayOfWeek;
