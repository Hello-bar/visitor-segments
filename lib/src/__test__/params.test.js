"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://test.io/?utm_term=term&utm_campaign=campaign&utm_content=content&utm_medium=medium&utm_source=source&custom_param=foo"}
 */
const segments_1 = require("./lib/segments");
const firstVisit = new Date('2020-01-01T00:00');
describe('Segments.params', () => {
    beforeAll(() => {
        segments_1.segments.clear();
        jest
            .useFakeTimers()
            .setSystemTime(firstVisit);
    });
    beforeAll(async () => await segments_1.segments.visit());
    it('has .term', () => {
        expect(segments_1.segments.params.term).toEqual('term');
    });
    it('has .campaign', () => {
        expect(segments_1.segments.params.campaign).toEqual('campaign');
    });
    it('has .content', () => {
        expect(segments_1.segments.params.content).toEqual('content');
    });
    it('has .medium', () => {
        expect(segments_1.segments.params.medium).toEqual('medium');
    });
    it('has .source', () => {
        expect(segments_1.segments.params.source).toEqual('source');
    });
    it('has .params', () => {
        expect(segments_1.segments.params.all).toEqual({
            utm_term: 'term',
            utm_campaign: 'campaign',
            utm_content: 'content',
            utm_medium: 'medium',
            utm_source: 'source',
            custom_param: 'foo'
        });
    });
});
