"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoredValue = void 0;
class StoredValue {
    constructor(json) {
        const { value, expiration } = JSON.parse(json);
        this.value = value;
        this.expiration = new Date(expiration);
    }
    isExpired() {
        if (this.expiration) {
            return this.expiration < new Date();
        }
        return false;
    }
}
exports.StoredValue = StoredValue;
