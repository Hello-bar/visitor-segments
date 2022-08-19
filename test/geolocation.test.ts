/**
 * @jest-environment jsdom
 */
import {segments, geoAdapter} from "./lib/segments";
const firstVisit: Date = new Date('2020-01-01T00:00')

describe('Segments.geolocation', () => {
  beforeAll(() => {
    segments.clear()
    jest
      .useFakeTimers()
      .setSystemTime(firstVisit);
  })
  beforeAll(async () => await segments.visit())

  describe('when no geo info', () => {
    it('has .city', () => {
      expect(segments.geolocation.city).toBeUndefined()
    });

    it('has .region', () => {
      expect(segments.geolocation.region).toBeUndefined()
    });

    it('has .country', () => {
      expect(segments.geolocation.country).toBeUndefined()
    });
  })

  describe('when there is geo info', () => {
    beforeAll(async () => {
      geoAdapter.set('city', 'Miami')
      geoAdapter.set('region', 'FL')
      geoAdapter.set('regionName', 'Florida')
      geoAdapter.set('countryCode', 'US')
      geoAdapter.set('country', 'United States')
      await segments.visit()
    })

    it('has .city', () => {
      expect(segments.geolocation.city).toEqual('Miami')
    });

    it('has .region', () => {
      expect(segments.geolocation.region).toEqual('FL')
    });

    it('has .country', () => {
      expect(segments.geolocation.country).toEqual('US')
    });
  })
})
