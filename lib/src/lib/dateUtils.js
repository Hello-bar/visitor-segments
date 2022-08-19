"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = exports.MINUTES_IN_DAY = exports.MINUTE = exports.DAY = exports.HOUR = void 0;
exports.HOUR = 60 * 60;
exports.DAY = 24 * exports.HOUR;
exports.MINUTE = 1000 * 60;
exports.MINUTES_IN_DAY = 60 * 24;
function now() {
    const nowDate = new Date();
    return Math.round(nowDate.getTime() / 1000);
}
exports.now = now;
