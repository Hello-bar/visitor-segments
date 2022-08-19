"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSegments = exports.SEGMENTS = exports.SEGMENT_KEYS = void 0;
const firstVisit_1 = require("./segments/firstVisit");
const lastVisit_1 = require("./segments/lastVisit");
const firstVisitDays_1 = require("./segments/firstVisitDays");
const lastVisitDays_1 = require("./segments/lastVisitDays");
const visits_1 = require("./segments/visits");
const adSource_1 = require("./segments/adSource");
const adCampaign_1 = require("./segments/adCampaign");
const adContent_1 = require("./segments/adContent");
const adMedium_1 = require("./segments/adMedium");
const adTerm_1 = require("./segments/adTerm");
const params_1 = require("./segments/params");
const previousPage_1 = require("./segments/previousPage");
const referrer_1 = require("./segments/referrer");
const referrerDomain_1 = require("./segments/referrerDomain");
const referrerTerms_1 = require("./segments/referrerTerms");
const pagePath_1 = require("./segments/pagePath");
const urlKeywords_1 = require("./segments/urlKeywords");
const dateSegment_1 = require("./segments/dateSegment");
const dayOfWeek_1 = require("./segments/dayOfWeek");
const device_1 = require("./segments/device");
const wordpressTags_1 = require("./segments/wordpressTags");
const conversions_1 = require("./segments/conversions");
const firstConversion_1 = require("./segments/firstConversion");
const lastConversion_1 = require("./segments/lastConversion");
const city_1 = require("./segments/city");
const country_1 = require("./segments/country");
const region_1 = require("./segments/region");
const cookies_1 = require("./segments/cookies");
const sessions_1 = require("./segments/sessions");
const originalReferrer_1 = require("./segments/originalReferrer");
const custom_1 = require("./segments/custom");
const sessionUUID_1 = require("./segments/sessionUUID");
var SEGMENT_KEYS;
(function (SEGMENT_KEYS) {
    SEGMENT_KEYS["FIRST_VISIT"] = "fv";
    SEGMENT_KEYS["LAST_VISIT"] = "lv";
    SEGMENT_KEYS["FIRST_VISIT_DAYS"] = "lf";
    SEGMENT_KEYS["LAST_VISIT_DAYS"] = "ls";
    SEGMENT_KEYS["VISITS"] = "nv";
    SEGMENT_KEYS["SESSIONS"] = "ns";
    SEGMENT_KEYS["SESSION_UUID"] = "sid";
    SEGMENT_KEYS["AD_SOURCE"] = "ad_so";
    SEGMENT_KEYS["AD_CAMPAIGN"] = "ad_ca";
    SEGMENT_KEYS["AD_MEDIUM"] = "ad_me";
    SEGMENT_KEYS["AD_CONTENT"] = "ad_co";
    SEGMENT_KEYS["AD_TERM"] = "ad_te";
    SEGMENT_KEYS["PARAMS"] = "pq";
    SEGMENT_KEYS["ORIGINAL_REFERRER"] = "or";
    SEGMENT_KEYS["REFERRER"] = "rf";
    SEGMENT_KEYS["REFERRER_DOMAIN"] = "rd";
    SEGMENT_KEYS["REFERRER_TERMS"] = "st";
    SEGMENT_KEYS["PREVIOUS_PAGE"] = "pp";
    SEGMENT_KEYS["PAGE_PATH"] = "pup";
    SEGMENT_KEYS["URL_KEYWORDS"] = "puk";
    SEGMENT_KEYS["DATE"] = "dt";
    SEGMENT_KEYS["DAY_OF_WEEK"] = "dw";
    SEGMENT_KEYS["DEVICE"] = "dv";
    SEGMENT_KEYS["COOKIES"] = "cv";
    SEGMENT_KEYS["WORDPRESS_TAGS"] = "wp_t";
    SEGMENT_KEYS["CONVERSIONS"] = "cnv";
    SEGMENT_KEYS["FIRST_CONVERSION"] = "cnv_f";
    SEGMENT_KEYS["LAST_CONVERSION"] = "cnv_l";
    SEGMENT_KEYS["CITY"] = "gl_cty";
    SEGMENT_KEYS["COUNTRY"] = "gl_ctr";
    SEGMENT_KEYS["REGION"] = "gl_rgn";
    SEGMENT_KEYS["CUSTOM"] = "cs";
})(SEGMENT_KEYS = exports.SEGMENT_KEYS || (exports.SEGMENT_KEYS = {}));
exports.SEGMENTS = {
    [SEGMENT_KEYS.FIRST_VISIT]: firstVisit_1.FirstVisit,
    [SEGMENT_KEYS.LAST_VISIT]: lastVisit_1.LastVisit,
    [SEGMENT_KEYS.FIRST_VISIT_DAYS]: firstVisitDays_1.FirstVisitDays,
    [SEGMENT_KEYS.LAST_VISIT_DAYS]: lastVisitDays_1.LastVisitDays,
    [SEGMENT_KEYS.VISITS]: visits_1.Visits,
    [SEGMENT_KEYS.SESSIONS]: sessions_1.Sessions,
    [SEGMENT_KEYS.SESSION_UUID]: sessionUUID_1.SessionUUID,
    [SEGMENT_KEYS.AD_TERM]: adTerm_1.AdTerm,
    [SEGMENT_KEYS.AD_MEDIUM]: adMedium_1.AdMedium,
    [SEGMENT_KEYS.AD_CONTENT]: adContent_1.AdContent,
    [SEGMENT_KEYS.AD_CAMPAIGN]: adCampaign_1.AdCampaign,
    [SEGMENT_KEYS.AD_SOURCE]: adSource_1.AdSource,
    [SEGMENT_KEYS.PARAMS]: params_1.Params,
    [SEGMENT_KEYS.PREVIOUS_PAGE]: previousPage_1.PreviousPage,
    [SEGMENT_KEYS.REFERRER]: referrer_1.Referrer,
    [SEGMENT_KEYS.ORIGINAL_REFERRER]: originalReferrer_1.OriginalReferrer,
    [SEGMENT_KEYS.REFERRER_DOMAIN]: referrerDomain_1.ReferrerDomain,
    [SEGMENT_KEYS.REFERRER_TERMS]: referrerTerms_1.ReferrerTerms,
    [SEGMENT_KEYS.PAGE_PATH]: pagePath_1.PagePath,
    [SEGMENT_KEYS.URL_KEYWORDS]: urlKeywords_1.UrlKeywords,
    [SEGMENT_KEYS.DATE]: dateSegment_1.DateSegment,
    [SEGMENT_KEYS.DAY_OF_WEEK]: dayOfWeek_1.DayOfWeek,
    [SEGMENT_KEYS.DEVICE]: device_1.Device,
    [SEGMENT_KEYS.COOKIES]: cookies_1.Cookies,
    [SEGMENT_KEYS.WORDPRESS_TAGS]: wordpressTags_1.WordpressTags,
    [SEGMENT_KEYS.CONVERSIONS]: conversions_1.Conversions,
    [SEGMENT_KEYS.FIRST_CONVERSION]: firstConversion_1.FirstConversion,
    [SEGMENT_KEYS.LAST_CONVERSION]: lastConversion_1.LastConversion,
    [SEGMENT_KEYS.CITY]: city_1.City,
    [SEGMENT_KEYS.COUNTRY]: country_1.Country,
    [SEGMENT_KEYS.REGION]: region_1.Region,
    [SEGMENT_KEYS.CUSTOM]: custom_1.Custom
};
const buildSegments = (visitor) => {
    return Object.keys(exports.SEGMENTS).reduce((map, key) => {
        const klass = exports.SEGMENTS[key];
        return { [key]: new klass(visitor), ...map };
    }, {});
};
exports.buildSegments = buildSegments;
