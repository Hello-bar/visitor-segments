"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSegment = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class DateSegment extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.DATE, visitor);
    }
    setValue(value) {
        super.setValue(value || yearMonthDay(new Date()));
    }
}
exports.DateSegment = DateSegment;
// returns date in format of 'YYYY-MM-DD'
function yearMonthDay(date) {
    function zeropad(string) {
        const length = Math.max(string.length, 2);
        return string.length >= length ? string : `0${string}`;
    }
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [
        date.getFullYear(),
        zeropad(month.toString()),
        zeropad(day.toString())
    ].join('-');
}
