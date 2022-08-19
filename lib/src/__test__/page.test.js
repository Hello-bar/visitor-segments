"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://test.io/path?foo=bar&baz=foo"}
 */
const segments_1 = require("./lib/segments");
let userAgentGetter;
beforeEach(() => {
    userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});
beforeAll(() => {
    segments_1.segments.clear();
    jest
        .useFakeTimers()
        .setSystemTime(new Date('2020-01-01'));
});
describe('Segments.page', () => {
    beforeEach(async () => await segments_1.segments.visit());
    it('has .path', () => {
        expect(segments_1.segments.page.path).toEqual('/path');
    });
    it('has .date', () => {
        expect(segments_1.segments.page.date).toEqual('2020-01-01');
    });
    it('has .dayOfWeek', () => {
        expect(segments_1.segments.page.dayOfWeek).toEqual(3);
    });
    it('has .urlKeywords', () => {
        expect(segments_1.segments.page.urlKeywords).toEqual(['path', 'foo', 'bar', 'baz', 'foo']);
    });
    it('has .wordpressTags', () => {
        expect(segments_1.segments.page.wordpressTags).toEqual([]);
    });
    it('has .cookies', () => {
        expect(segments_1.segments.page.cookies).toEqual({});
    });
    describe('when userAgent is a desktop', () => {
        it('.device is "computer"', () => {
            expect(segments_1.segments.page.device).toEqual('computer');
        });
    });
    describe('when userAgent is ipad', () => {
        beforeEach(() => userAgentGetter.mockReturnValue('ipad'));
        beforeEach(async () => await segments_1.segments.visit());
        it('.device is "tablet"', () => {
            console.log(navigator.userAgent);
            expect(segments_1.segments.page.device).toEqual('tablet');
        });
    });
    describe.each([
        'mobile',
        'phone',
        'ipod',
        'blackberry',
        'docomo'
    ])('when userAgent is a %s', (useragent) => {
        beforeEach(() => userAgentGetter.mockReturnValue(useragent));
        beforeEach(async () => await segments_1.segments.visit());
        it('.device is "mobile"', () => {
            expect(segments_1.segments.page.device).toEqual('mobile');
        });
    });
});
