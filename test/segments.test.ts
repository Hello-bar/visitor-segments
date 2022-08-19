/**
 * @jest-environment jsdom
 */
import {Visits} from "../src/visits";
import {Session} from "../src/session";
import {Conversions} from "../src/conversions";
import {Params} from "../src/params";
import {GeoLocation} from "../src/geolocation";
import {Referrer} from "../src/referrer";
import {Page} from "../src/page";
import {segments} from "./lib/segments";


describe('Segments', () => {
  afterEach(() => { segments.clear() })

  it('has .visits', () => {
    expect(segments.visits).toBeInstanceOf(Visits)
  });

  it('has .session', () => {
    expect(segments.session).toBeInstanceOf(Session)
  });

  it('has .conversions', () => {
    expect(segments.conversions).toBeInstanceOf(Conversions)
  });

  it('has .params', () => {
    expect(segments.params).toBeInstanceOf(Params)
  });

  it('has .geolocation', () => {
    expect(segments.geolocation).toBeInstanceOf(GeoLocation)
  });

  it('has .referrer', () => {
    expect(segments.referrer).toBeInstanceOf(Referrer)
  });

  it('has .page', () => {
    expect(segments.page).toBeInstanceOf(Page)
  });

  describe('custom segments', () => {
    it('.set and .get', () => {
      segments.set('name', 'Anton')
      expect(segments.get('name')).toEqual('Anton')
      expect(segments.get('undef')).toBeUndefined()
      expect(segments.get('')).toBeUndefined()
      segments.set('name', null)
      expect(segments.get('name')).toBeNull()
    });
  })

  describe('interpolation', () => {
    it('', () => {
      segments.set('name', 'Anton')
      expect(segments.interpolate('%{name}')).toEqual('Anton')
      segments.visit()
      expect(segments.interpolate('%{name}, %{visits.count}')).toEqual('Anton, 1')
    });
  })

  describe('clear', () => {
    it('delete all data', () => {
      segments.visit()
      expect(segments.visits.count).toEqual(1)
      segments.clear()
      expect(segments.visits.count).toEqual(0)
      segments.visit()
      expect(segments.visits.count).toEqual(1)
      segments.clear()
    })
  })
})
