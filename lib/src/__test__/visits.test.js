"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const segments_1 = require("./lib/segments");
const firstVisit = new Date('2020-01-01');
const secondVisit = new Date('2020-01-02');
const lastVisit = new Date('2020-01-08');
describe('Segments.visits', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstVisit);
    });
    describe('when no visits', () => {
        it('has .count', () => {
            expect(segments_1.segments.visits.count).toEqual(0);
        });
        it('has .first', () => {
            expect(segments_1.segments.visits.first).toBeUndefined();
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.visits.firstDate).toBeUndefined();
        });
        it('has .last', () => {
            expect(segments_1.segments.visits.last).toBeUndefined();
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.visits.lastDate).toBeUndefined();
        });
        it('has .daysFromFirst', () => {
            expect(segments_1.segments.visits.daysFromFirst).toEqual(0);
        });
        it('has .daysFromLast', () => {
            expect(segments_1.segments.visits.daysFromLast).toEqual(0);
        });
    });
    describe('on first visit', () => {
        beforeAll(async () => await segments_1.segments.visit());
        it('has .count', () => {
            expect(segments_1.segments.visits.count).toEqual(1);
        });
        it('has .first', () => {
            expect(segments_1.segments.visits.first).toEqual(firstVisit.getTime() / 1000);
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.visits.firstDate).toEqual(firstVisit);
        });
        it('has .last', () => {
            expect(segments_1.segments.visits.last).toEqual(firstVisit.getTime() / 1000);
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.visits.lastDate).toEqual(firstVisit);
        });
        it('has .daysFromFirst', () => {
            expect(segments_1.segments.visits.daysFromFirst).toEqual(0);
        });
        it('has .daysFromLast', () => {
            expect(segments_1.segments.visits.daysFromLast).toEqual(0);
        });
    });
    describe('on next day', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(secondVisit);
        });
        beforeAll(async () => await segments_1.segments.visit());
        it('has .count', () => {
            expect(segments_1.segments.visits.count).toEqual(2);
        });
        it('has .first', () => {
            expect(segments_1.segments.visits.first).toEqual(firstVisit.getTime() / 1000);
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.visits.firstDate).toEqual(firstVisit);
        });
        it('has .last', () => {
            expect(segments_1.segments.visits.last).toEqual(secondVisit.getTime() / 1000);
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.visits.lastDate).toEqual(secondVisit);
        });
        it('has .daysFromFirst', () => {
            expect(segments_1.segments.visits.daysFromFirst).toEqual(1);
        });
        it('has .daysFromLast', () => {
            expect(segments_1.segments.visits.daysFromLast).toEqual(1);
        });
    });
    describe('on next week', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(lastVisit);
        });
        beforeAll(async () => await segments_1.segments.visit());
        it('has .count', () => {
            expect(segments_1.segments.visits.count).toEqual(3);
        });
        it('has .first', () => {
            expect(segments_1.segments.visits.first).toEqual(firstVisit.getTime() / 1000);
        });
        it('has .firstDate', () => {
            expect(segments_1.segments.visits.firstDate).toEqual(firstVisit);
        });
        it('has .last', () => {
            expect(segments_1.segments.visits.last).toEqual(lastVisit.getTime() / 1000);
        });
        it('has .lastDate', () => {
            expect(segments_1.segments.visits.lastDate).toEqual(lastVisit);
        });
        it('has .daysFromFirst', () => {
            expect(segments_1.segments.visits.daysFromFirst).toEqual(7);
        });
        it('has .daysFromLast', () => {
            expect(segments_1.segments.visits.daysFromLast).toEqual(6);
        });
    });
});
