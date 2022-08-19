"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagePath = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
const normalizeUrl_1 = require("../lib/normalizeUrl");
class PagePath extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.PAGE_PATH, visitor);
    }
    setValue(value) {
        super.setValue(value || this.defaultValue());
    }
    defaultValue() {
        return (0, normalizeUrl_1.normalizeUrl)(document.location.pathname, true);
    }
}
exports.PagePath = PagePath;
