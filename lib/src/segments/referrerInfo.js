"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getTLD_1 = require("./getTLD");
const paramsFromString_1 = __importDefault(require("./paramsFromString"));
function referrerInfo() {
    const tld = (0, getTLD_1.getTLD)().toLowerCase();
    if (!document.referrer)
        return null;
    // Check to ensure that the tld is not present in the
    const referrer = `${document.referrer}`
        .replace(/.*?\:\/\//, '')
        .replace(/www\./i, '')
        .toLowerCase()
        .substring(0, 150);
    const referrerDomain = referrer.replace(/(.*?)\/.*/, '$1');
    const params = (0, paramsFromString_1.default)(referrer.split('?')[1]);
    const terms = params.query || params.q || params.search;
    return {
        referrer: referrer,
        domain: referrerDomain,
        isExternal: referrerDomain.indexOf(tld) == -1,
        searchTerms: terms
    };
}
exports.default = referrerInfo;
