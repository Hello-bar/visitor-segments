"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
const visits_1 = require("../visits");
const session_1 = require("../session");
const conversions_1 = require("../conversions");
const params_1 = require("../params");
const geolocation_1 = require("../geolocation");
const referrer_1 = require("../referrer");
const page_1 = require("../page");
const segments_1 = require("./lib/segments");
describe('Segments', () => {
    afterEach(() => {
        segments_1.segments.clear();
    });
    it('has .visits', () => {
        expect(segments_1.segments.visits).toBeInstanceOf(visits_1.Visits);
    });
    it('has .session', () => {
        expect(segments_1.segments.session).toBeInstanceOf(session_1.Session);
    });
    it('has .conversions', () => {
        expect(segments_1.segments.conversions).toBeInstanceOf(conversions_1.Conversions);
    });
    it('has .params', () => {
        expect(segments_1.segments.params).toBeInstanceOf(params_1.Params);
    });
    it('has .geolocation', () => {
        expect(segments_1.segments.geolocation).toBeInstanceOf(geolocation_1.GeoLocation);
    });
    it('has .referrer', () => {
        expect(segments_1.segments.referrer).toBeInstanceOf(referrer_1.Referrer);
    });
    it('has .page', () => {
        expect(segments_1.segments.page).toBeInstanceOf(page_1.Page);
    });
    describe('custom segments', () => {
        it('.set and .get', () => {
            segments_1.segments.set('name', 'Anton');
            expect(segments_1.segments.get('name')).toEqual('Anton');
            expect(segments_1.segments.get('undef')).toBeUndefined();
            expect(segments_1.segments.get('')).toBeUndefined();
            segments_1.segments.set('name', null);
            expect(segments_1.segments.get('name')).toBeNull();
        });
    });
    describe('interpolation', () => {
        it('', () => {
            segments_1.segments.set('name', 'Anton');
            expect(segments_1.segments.interpolate('%{name}')).toEqual('Anton');
            segments_1.segments.visit();
            expect(segments_1.segments.interpolate('%{name}, %{visits.count}')).toEqual('Anton, 1');
        });
    });
    describe('clear', () => {
        it('delete all data', () => {
            segments_1.segments.visit();
            expect(segments_1.segments.visits.count).toEqual(1);
            segments_1.segments.clear();
            expect(segments_1.segments.visits.count).toEqual(0);
            segments_1.segments.visit();
            expect(segments_1.segments.visits.count).toEqual(1);
            segments_1.segments.clear();
        });
    });
    describe('onUpdate', () => {
        it('fires handlers after .set', () => {
            const fired = [];
            segments_1.segments.onUpdate((key, value) => {
                fired.push({ key, value });
            });
            segments_1.segments.set('test', 'foo');
            expect(fired).toEqual([{ key: 'test', value: 'foo' }]);
        });
    });
});
