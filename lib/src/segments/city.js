"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class City extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.CITY, visitor);
    }
}
exports.City = City;
