"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 * @jest-environment-options {"referrer": "https://example.com/?search=terms"}
 */
const segments_1 = require("./lib/segments");
const firstVisit = new Date('2020-01-01T00:00');
describe('Segments.referrer', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstVisit);
    });
    beforeAll(async () => await segments_1.segments.visit());
    it('has .referrer', () => {
        expect(segments_1.segments.referrer.referrer).toEqual('example.com/?search=terms');
    });
    it('has .originalReferrer', () => {
        expect(segments_1.segments.referrer.originalReferrer).toEqual('example.com/?search=terms');
    });
    it('has .referrerDomain', () => {
        expect(segments_1.segments.referrer.referrerDomain).toEqual('example.com');
    });
    it('has .previousPage', () => {
        expect(segments_1.segments.referrer.previousPage).toEqual('example.com/?search=terms');
    });
    it('has .referrerTerms', () => {
        expect(segments_1.segments.referrer.referrerTerms).toEqual('terms');
    });
});
