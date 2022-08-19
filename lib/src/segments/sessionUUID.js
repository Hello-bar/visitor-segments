"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionUUID = void 0;
const segmentMaps_1 = require("../segmentMaps");
const segment_1 = require("../segment");
class SessionUUID extends segment_1.Segment {
    constructor(visitor) {
        super(segmentMaps_1.SEGMENT_KEYS.SESSION_UUID, visitor);
    }
    get value() {
        if (!super.value) {
            this.setValue();
        }
        return super.value;
    }
    setValue(value) {
        super.setValueOnce(value || this.generateUUID());
    }
    reset() {
        super.reset();
        super.setValue();
    }
    generateUUID() {
        let dt = new Date().getTime();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (dt + Math.random() * 16) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
}
exports.SessionUUID = SessionUUID;
