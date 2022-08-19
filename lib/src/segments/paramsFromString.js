"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paramsFromString(string) {
    return Object.fromEntries(new URLSearchParams(string));
}
exports.default = paramsFromString;
