"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const segments_1 = require("./lib/segments");
const firstConversion = new Date('2020-01-01T00:00');
const secondConversion = new Date('2020-01-01T02:00');
describe('Segments.conversions', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstConversion);
    });
    beforeAll(async () => await segments_1.segments.visit());
    describe('when no conversions', () => {
        it('has .count', () => {
            expect(segments_1.segments.conversions.count).toEqual(0);
        });
        it('has .first', () => {
            expect(segments_1.segments.conversions.first).toBeUndefined();
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.conversions.firstDate).toBeUndefined();
        });
        it('has .last', () => {
            expect(segments_1.segments.conversions.last).toBeUndefined();
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.conversions.lastDate).toBeUndefined();
        });
    });
    describe('after first conversion', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(firstConversion);
        });
        beforeAll(() => segments_1.segments.convert());
        it('has .count', () => {
            expect(segments_1.segments.conversions.count).toEqual(1);
        });
        it('has .first', () => {
            expect(segments_1.segments.conversions.first).toEqual(firstConversion.getTime() / 1000);
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.conversions.firstDate).toEqual(firstConversion);
        });
        it('has .last', () => {
            expect(segments_1.segments.conversions.last).toEqual(firstConversion.getTime() / 1000);
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.conversions.lastDate).toEqual(firstConversion);
        });
    });
    describe('after second conversion', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(secondConversion);
        });
        beforeAll(() => segments_1.segments.convert());
        it('has .count', () => {
            expect(segments_1.segments.conversions.count).toEqual(2);
        });
        it('has .first', () => {
            expect(segments_1.segments.conversions.first).toEqual(firstConversion.getTime() / 1000);
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.conversions.firstDate).toEqual(firstConversion);
        });
        it('has .last', () => {
            expect(segments_1.segments.conversions.last).toEqual(secondConversion.getTime() / 1000);
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.conversions.lastDate).toEqual(secondConversion);
        });
    });
});
