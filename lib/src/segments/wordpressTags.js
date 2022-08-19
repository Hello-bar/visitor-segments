"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordpressTags = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class WordpressTags extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.WORDPRESS_TAGS, visitor);
    }
    get value() {
        return super.value || [];
    }
    setValue(value) {
        const tags = value || this.defaultValue();
        if ((tags === null || tags === void 0 ? void 0 : tags.length) && (tags === null || tags === void 0 ? void 0 : tags.length) > 0) {
            super.setValue(tags);
        }
    }
    defaultValue() {
        return window._hellobar_wordpress_tags || [];
    }
}
exports.WordpressTags = WordpressTags;
