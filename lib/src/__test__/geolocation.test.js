"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const segments_1 = require("./lib/segments");
const firstVisit = new Date('2020-01-01T00:00');
describe('Segments.geolocation', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstVisit);
    });
    beforeAll(async () => await segments_1.segments.visit());
    describe('when no geo info', () => {
        it('has .city', () => {
            expect(segments_1.segments.geolocation.city).toBeUndefined();
        });
        it('has .region', () => {
            expect(segments_1.segments.geolocation.region).toBeUndefined();
        });
        it('has .country', () => {
            expect(segments_1.segments.geolocation.country).toBeUndefined();
        });
    });
    describe('when there is geo info', () => {
        beforeAll(async () => {
            segments_1.geoAdapter.set('city', 'Miami');
            segments_1.geoAdapter.set('region', 'FL');
            segments_1.geoAdapter.set('regionName', 'Florida');
            segments_1.geoAdapter.set('countryCode', 'US');
            segments_1.geoAdapter.set('country', 'United States');
            await segments_1.segments.visit();
        });
        it('has .city', () => {
            expect(segments_1.segments.geolocation.city).toEqual('Miami');
        });
        it('has .region', () => {
            expect(segments_1.segments.geolocation.region).toEqual('FL');
        });
        it('has .country', () => {
            expect(segments_1.segments.geolocation.country).toEqual('US');
        });
    });
});
