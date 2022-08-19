"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitor = void 0;
const dateUtils_1 = require("./lib/dateUtils");
const valueStorage_1 = require("./valueStorage");
class Visitor {
    constructor(key, adapter, expiresInDays = 365 * 5) {
        this.storage = new valueStorage_1.ValueStorage(new adapter(), expiresInDays * dateUtils_1.MINUTES_IN_DAY);
        this.key = key;
        this.data = {};
        this.load();
    }
    getValue(key) {
        return this.data[key];
    }
    setValue(key, value) {
        this.data[key] = value;
        this.save();
    }
    setValueOnce(key, value) {
        const currentValue = this.getValue(key);
        if (currentValue === null || currentValue === undefined) {
            this.setValue(key, value);
        }
    }
    removeValue(key) {
        delete this.data[key];
        this.save();
    }
    now() {
        return (0, dateUtils_1.now)();
    }
    clear() {
        this.data = {};
        this.save();
    }
    save() {
        this.storage.setValue(this.key, this.data);
    }
    load() {
        this.data = this.storage.getValue(this.key) || {};
    }
}
exports.Visitor = Visitor;
