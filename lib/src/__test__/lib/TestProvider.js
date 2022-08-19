"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestProvider = void 0;
const interfaces_1 = require("../../lib/interfaces");
class TestProvider {
    constructor() {
        this.info = { status: interfaces_1.GEO_INFO_STATUSES.success };
    }
    set(key, value) {
        // @ts-ignore
        this.info[key] = value;
    }
    async getLocationInfo() {
        return this.info;
    }
}
exports.TestProvider = TestProvider;
