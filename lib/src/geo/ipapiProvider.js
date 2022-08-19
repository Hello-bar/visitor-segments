"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPApiProvider = void 0;
const interfaces_1 = require("../lib/interfaces");
class IPApiProvider {
    get url() {
        const fields = 'status,country,countryCode,regionName,region,city,timezone,mobile';
        return IPApiProvider.key ?
            `https://pro.ip-api.com/json?key${IPApiProvider.key}&fields=${fields}` :
            `http://ip-api.com/json?fields=${fields}`;
    }
    async getLocationInfo() {
        let json;
        try {
            const response = await fetch(this.url);
            json = await response.json();
        }
        catch (err) {
            json = { status: interfaces_1.GEO_INFO_STATUSES.fail };
        }
        return json;
    }
}
exports.IPApiProvider = IPApiProvider;
