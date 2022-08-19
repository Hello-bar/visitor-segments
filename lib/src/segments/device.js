"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class Device extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.DEVICE, visitor);
    }
    setValue(value) {
        super.setValue(value || this.defaultValue());
    }
    defaultValue() {
        const ua = navigator.userAgent;
        if (ua.match(/ipad/i))
            return 'tablet';
        else if (ua.match(/(mobi|phone|ipod|blackberry|docomo)/i))
            return 'mobile';
        else if (ua.match(/(ipad|kindle|android)/i))
            return 'tablet';
        return 'computer';
    }
}
exports.Device = Device;
