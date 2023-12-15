import { FirstVisit } from './segments/firstVisit';
import { LastVisit } from './segments/lastVisit';
import { FirstVisitDays } from './segments/firstVisitDays';
import { LastVisitDays } from './segments/lastVisitDays';
import { Visits } from './segments/visits';
import { AdSource } from './segments/adSource';
import { AdCampaign } from './segments/adCampaign';
import { AdContent } from './segments/adContent';
import { AdMedium } from './segments/adMedium';
import { AdTerm } from './segments/adTerm';
import { Params } from './segments/params';
import { PreviousPage } from './segments/previousPage';
import { Referrer } from './segments/referrer';
import { ReferrerDomain } from './segments/referrerDomain';
import { ReferrerTerms } from './segments/referrerTerms';
import { PagePath } from './segments/pagePath';
import { PageUrl } from './segments/pageUrl';
import { UrlKeywords } from './segments/urlKeywords';
import { DateSegment } from './segments/dateSegment';
import { DayOfWeek } from './segments/dayOfWeek';
import { Device } from './segments/device';
import { WordpressTags } from './segments/wordpressTags';
import { Conversions } from './segments/conversions';
import { FirstConversion } from './segments/firstConversion';
import { LastConversion } from './segments/lastConversion';
import { City } from './segments/city';
import { Country } from './segments/country';
import { Region } from './segments/region';
import { Cookies } from './segments/cookies';
import { Sessions } from './segments/sessions';
import { OriginalReferrer } from './segments/originalReferrer';
import { Custom } from './segments/custom';
import { SegmentClassMap, SegmentMap, ValueStorageInterface } from './lib/interfaces';
import { SessionUUID } from './segments/sessionUUID';
import { RegionName } from './segments/regionName';
import { CountryName } from './segments/countryName';
import { MobileCell } from './segments/mobileCell';
import { Timezone } from './segments/timezone';
import { AdBlockerDetect } from './segments/adBlockerDetect';

export enum SEGMENT_KEYS {
  FIRST_VISIT = 'fv',
  LAST_VISIT = 'lv',
  FIRST_VISIT_DAYS = 'lf',
  LAST_VISIT_DAYS = 'ls',
  VISITS = 'nv',
  SESSIONS = 'ns',
  SESSION_UUID = 'sid',
  AD_SOURCE = 'ad_so',
  AD_CAMPAIGN = 'ad_ca',
  AD_MEDIUM = 'ad_me',
  AD_CONTENT = 'ad_co',
  AD_TERM = 'ad_te',
  AD_BLOCKER_DETECT = 'ad_blk',
  PARAMS = 'pq',
  ORIGINAL_REFERRER = 'or',
  REFERRER = 'rf',
  REFERRER_DOMAIN = 'rd',
  REFERRER_TERMS = 'st',
  PREVIOUS_PAGE = 'pp',
  PAGE_URL = 'pu',
  PAGE_PATH = 'pup',
  URL_KEYWORDS = 'puk',
  DATE = 'dt',
  DAY_OF_WEEK = 'dw',
  DEVICE = 'dv',
  COOKIES = 'cv',
  WORDPRESS_TAGS = 'wp_t',
  CONVERSIONS = 'cnv',
  FIRST_CONVERSION = 'cnv_f',
  LAST_CONVERSION = 'cnv_l',
  CITY = 'gl_cty',
  COUNTRY = 'gl_ctr',
  COUNTRY_NAME = 'gl_c',
  REGION = 'gl_r',
  REGION_NAME = 'gl_rgn',
  MOBILE_CELL = 'gl_m',
  TIMEZONE = 'gl_t',
  CUSTOM = 'cs',
}

export const SEGMENTS: SegmentClassMap = {
  [SEGMENT_KEYS.FIRST_VISIT]: FirstVisit,
  [SEGMENT_KEYS.LAST_VISIT]: LastVisit,
  [SEGMENT_KEYS.FIRST_VISIT_DAYS]: FirstVisitDays,
  [SEGMENT_KEYS.LAST_VISIT_DAYS]: LastVisitDays,
  [SEGMENT_KEYS.VISITS]: Visits,
  [SEGMENT_KEYS.SESSIONS]: Sessions,
  [SEGMENT_KEYS.SESSION_UUID]: SessionUUID,
  [SEGMENT_KEYS.AD_TERM]: AdTerm,
  [SEGMENT_KEYS.AD_MEDIUM]: AdMedium,
  [SEGMENT_KEYS.AD_CONTENT]: AdContent,
  [SEGMENT_KEYS.AD_CAMPAIGN]: AdCampaign,
  [SEGMENT_KEYS.AD_SOURCE]: AdSource,
  [SEGMENT_KEYS.AD_BLOCKER_DETECT]: AdBlockerDetect,
  [SEGMENT_KEYS.PARAMS]: Params,
  [SEGMENT_KEYS.PREVIOUS_PAGE]: PreviousPage,
  [SEGMENT_KEYS.REFERRER]: Referrer,
  [SEGMENT_KEYS.ORIGINAL_REFERRER]: OriginalReferrer,
  [SEGMENT_KEYS.REFERRER_DOMAIN]: ReferrerDomain,
  [SEGMENT_KEYS.REFERRER_TERMS]: ReferrerTerms,
  [SEGMENT_KEYS.PAGE_PATH]: PagePath,
  [SEGMENT_KEYS.PAGE_URL]: PageUrl,
  [SEGMENT_KEYS.URL_KEYWORDS]: UrlKeywords,
  [SEGMENT_KEYS.DATE]: DateSegment,
  [SEGMENT_KEYS.DAY_OF_WEEK]: DayOfWeek,
  [SEGMENT_KEYS.DEVICE]: Device,
  [SEGMENT_KEYS.COOKIES]: Cookies,
  [SEGMENT_KEYS.WORDPRESS_TAGS]: WordpressTags,
  [SEGMENT_KEYS.CONVERSIONS]: Conversions,
  [SEGMENT_KEYS.FIRST_CONVERSION]: FirstConversion,
  [SEGMENT_KEYS.LAST_CONVERSION]: LastConversion,
  [SEGMENT_KEYS.CITY]: City,
  [SEGMENT_KEYS.COUNTRY]: Country,
  [SEGMENT_KEYS.COUNTRY_NAME]: CountryName,
  [SEGMENT_KEYS.REGION]: Region,
  [SEGMENT_KEYS.REGION_NAME]: RegionName,
  [SEGMENT_KEYS.MOBILE_CELL]: MobileCell,
  [SEGMENT_KEYS.TIMEZONE]: Timezone,
  [SEGMENT_KEYS.CUSTOM]: Custom,
};

export const buildSegments = (segmentsMap: SegmentClassMap, visitor: ValueStorageInterface) => {
  return Object.keys(segmentsMap).reduce((map: SegmentMap, key: string) => {
    const klass = segmentsMap[key];
    return { [key]: new klass(visitor), ...map };
  }, {});
};
