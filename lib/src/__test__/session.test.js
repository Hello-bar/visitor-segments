"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const segments_1 = require("./lib/segments");
const firstVisit = new Date('2020-01-01T00:00');
const secondVisit = new Date('2020-01-01T02:00');
const lastVisit = new Date('2020-01-01T04:00');
describe('Segments.session', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstVisit);
    });
    beforeAll(async () => await segments_1.segments.visit());
    it('has .count', () => {
        expect(segments_1.segments.session.count).toEqual(1);
    });
    it('has .uuid', () => {
        expect(segments_1.segments.session.uuid).toMatch(/\w{8}-\w{4}-4\w{3}-\w{4}-\w{12}/);
    });
    describe('in 2 hours', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(secondVisit);
        });
        beforeAll(async () => await segments_1.segments.visit());
        it('has .count', () => {
            expect(segments_1.segments.session.count).toEqual(2);
        });
    });
    describe('in next 2 hours', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(lastVisit);
        });
        beforeAll(async () => await segments_1.segments.visit());
        it('has .count', () => {
            expect(segments_1.segments.session.count).toEqual(3);
        });
    });
    describe('when .end called', () => {
        beforeAll(() => {
            jest
                .useFakeTimers()
                .setSystemTime(lastVisit);
        });
        beforeAll(async () => await segments_1.segments.visit());
        it('starts new session on next visit', () => {
            segments_1.segments.session.end();
            expect(segments_1.segments.session.count).toEqual(3);
            segments_1.segments.visit();
            expect(segments_1.segments.session.count).toEqual(4);
            segments_1.segments.visit();
            expect(segments_1.segments.session.count).toEqual(4);
        });
    });
});
