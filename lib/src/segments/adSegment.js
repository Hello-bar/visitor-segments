"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdSegment = void 0;
const segment_1 = require("../segment");
class AdSegment extends segment_1.Segment {
    setValue(value) {
        if (value) {
            super.setValue(value);
        }
    }
}
exports.AdSegment = AdSegment;
