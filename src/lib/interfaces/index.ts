import { Segment } from '../../segment';
import { SEGMENT_KEYS } from '../../segmentMaps';

export interface StoredValueInterface {
  value: any;
  expiration: Date;
  isExpired(): boolean;
}

export interface StorageAdapter {
  setValue(key: string, value: any): void;
  getValue(key: string): string | undefined;
  removeValue(key: string): void;
}

export type StorageAdapterClass = new () => StorageAdapter;

export type ValueStorageInterface = {
  getValue(key: string): any;
  setValue(key: string, value: any): void;
  setValueOnce(key: string, value: any): void;
  removeValue(key: string): void;
  now(): number;
};

export type SegmentsFacade = {
  update(): void;
  reset(): void;
};

export interface GeoProviderAdapter {
  getLocationInfo(): Promise<GeoLocationInfo>;
}

export type UpdateKeyHandler = (key: string, value: string) => void;
export interface DataStorage {
  set(key: string, value: any): void;
  get(key: string): string | number;
  onUpdate(handler: UpdateKeyHandler): void;
}

export type GeoProvider = {
  key?: string | null;
  new (): GeoProviderAdapter;
};

export enum GEO_INFO_STATUSES {
  success = 'success',
  fail = 'fail',
}

export type GeoLocationInfo = {
  status: GEO_INFO_STATUSES;
  country?: string;
  countryCode?: string;
  regionName?: string;
  region?: string;
  city?: string;
  timezone?: string;
  mobile?: boolean;
};

export type SegmentsAdapters = {
  storageAdapter?: StorageAdapterClass;
  geoAdapter?: GeoProviderAdapter;
  segmentsMap?: SegmentClassMap;
  extraStorage?: DataStorage;
};

export interface SegmentsInterface {
  onUpdate(handler: UpdateKeyHandler): void;
  interpolate(input: string): string;
  set(key: string, value: any): void;
  get(key: string): any;
  visit(): Promise<any>;
  convert(): void;
  reset(): void;
  clear(): void;
  getSegmentByKey(key: SEGMENT_KEYS): Segment;
}

export type SegmentClassMap = { [key: string]: new (visitor: ValueStorageInterface) => Segment };
export type SegmentMap = { [key: string]: Segment };
