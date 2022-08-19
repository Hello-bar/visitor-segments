"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueStorage = void 0;
const storedValue_1 = require("./storedValue");
const dateUtils_1 = require("../lib/dateUtils");
class ValueStorage {
    constructor(adapter, expiresInMinutes) {
        this.adapter = adapter;
        this.expiresInMs = expiresInMinutes * dateUtils_1.MINUTE;
    }
    get expiration() {
        const date = new Date();
        date.setTime(date.getTime() + this.expiresInMs);
        return date.toISOString();
    }
    setValue(key, value) {
        this.adapter.setValue(key, {
            value,
            expiration: this.expiration
        });
    }
    getValue(key) {
        const json = this.adapter.getValue(key);
        if (json) {
            const value = new storedValue_1.StoredValue(json);
            if (value.isExpired()) {
                this.removeValue(key);
                return undefined;
            }
            else {
                return value.value;
            }
        }
        return undefined;
    }
    removeValue(key) {
        return this.adapter.removeValue(key);
    }
}
exports.ValueStorage = ValueStorage;
