/**
 * @jest-environment jsdom
 */
import { Visits } from '../visits';
import { Session } from '../session';
import { Conversions } from '../conversions';
import { Params } from '../params';
import { GeoLocation } from '../geolocation';
import { Referrer } from '../referrer';
import { Page } from '../page';
import { segments } from './lib/segments';

describe('Segments', () => {
  afterEach(() => {
    segments.clear();
  });

  it('has .visits', () => {
    expect(segments.visits).toBeInstanceOf(Visits);
  });

  it('has .session', () => {
    expect(segments.session).toBeInstanceOf(Session);
  });

  it('has .conversions', () => {
    expect(segments.conversions).toBeInstanceOf(Conversions);
  });

  it('has .params', () => {
    expect(segments.params).toBeInstanceOf(Params);
  });

  it('has .geolocation', () => {
    expect(segments.geolocation).toBeInstanceOf(GeoLocation);
  });

  it('has .referrer', () => {
    expect(segments.referrer).toBeInstanceOf(Referrer);
  });

  it('has .page', () => {
    expect(segments.page).toBeInstanceOf(Page);
  });

  describe('custom segments', () => {
    it('.set and .get', () => {
      segments.set('name', 'Anton');
      expect(segments.get('name')).toEqual('Anton');
      expect(segments.get('undef')).toBeUndefined();
      expect(segments.get('')).toBeUndefined();
      segments.set('name', null);
      expect(segments.get('name')).toBeUndefined();
    });
  });

  describe('interpolation', () => {
    it('', async () => {
      segments.set('name', 'Anton');
      expect(segments.interpolate('{{name}}')).toEqual('Anton');
      await segments.visit();
      expect(segments.interpolate('{{name}}, {{visits.count}}')).toEqual('Anton, 1');
      expect(segments.interpolate('{{name}} {{undefined}}')).toEqual('Anton ');
    });
  });

  describe('clear', () => {
    it('delete all data', async () => {
      await segments.visit();
      expect(segments.visits.count).toEqual(1);
      segments.clear();
      expect(segments.visits.count).toEqual(0);
      await segments.visit();
      expect(segments.visits.count).toEqual(1);
      segments.clear();
    });
  });

  describe('onUpdate', () => {
    it('fires handlers after .set', () => {
      const fired: any = [];

      segments.onUpdate((key: string, value: string) => {
        fired.push({ key, value });
      });
      segments.set('test', 'foo');
      expect(fired).toEqual([
        { key: 'cs', value: { test: 'foo' } },
        { key: 'test', value: 'foo' },
      ]);
    });
  });

  describe('reset', () => {
    it('sets default values', async () => {
      await segments.visit();
      segments.reset();
      expect(segments.visits.count).toEqual(0);
    });
  });
});
