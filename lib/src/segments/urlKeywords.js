"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlKeywords = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class UrlKeywords extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.URL_KEYWORDS, visitor);
    }
    get value() {
        return super.value || [];
    }
    setValue(value) {
        super.setValue(value || this.defaultValue());
    }
    defaultValue() {
        return (document.location.pathname + document.location.search)
            .split(/\W/)
            .filter(a => a !== '');
    }
}
exports.UrlKeywords = UrlKeywords;
