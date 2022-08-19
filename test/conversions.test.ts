/**
 * @jest-environment jsdom
 */
import {segments} from "./lib/segments";

const firstConversion: Date = new Date('2020-01-01T00:00')
const secondConversion = new Date('2020-01-01T02:00')

describe('Segments.conversions', () => {
  beforeAll(() => {
    segments.clear()
    jest
      .useFakeTimers()
      .setSystemTime(firstConversion);
  })
  beforeAll(async () => await segments.visit())

  describe('when no conversions', () => {
    it('has .count', () => {
      expect(segments.conversions.count).toEqual(0)
    });

    it('has .first', () => {
      expect(segments.conversions.first).toBeUndefined()
    });

    it('has .firstDate', () => {
      expect(segments.conversions.firstDate).toBeUndefined()
    });

    it('has .last', () => {
      expect(segments.conversions.last).toBeUndefined()
    });

    it('has .lastDate', () => {
      expect(segments.conversions.lastDate).toBeUndefined()
    });
  })

  describe('after first conversion', () => {
    beforeAll(() => {
      jest
        .useFakeTimers()
        .setSystemTime(firstConversion);
    })
    beforeAll(() => segments.convert())

    it('has .count', () => {
      expect(segments.conversions.count).toEqual(1)
    });

    it('has .first', () => {
      expect(segments.conversions.first).toEqual(firstConversion.getTime() / 1000)
    });

    it('has .firstDate', () => {
      expect(segments.conversions.firstDate).toEqual(firstConversion)
    });

    it('has .last', () => {
      expect(segments.conversions.last).toEqual(firstConversion.getTime() / 1000)
    });

    it('has .lastDate', () => {
      expect(segments.conversions.lastDate).toEqual(firstConversion)
    });
  })

  describe('after second conversion', () => {
    beforeAll(() => {
      jest
        .useFakeTimers()
        .setSystemTime(secondConversion);
    })
    beforeAll(() => segments.convert())

    it('has .count', () => {
      expect(segments.conversions.count).toEqual(2)
    });

    it('has .first', () => {
      expect(segments.conversions.first).toEqual(firstConversion.getTime() / 1000)
    });

    it('has .firstDate', () => {
      expect(segments.conversions.firstDate).toEqual(firstConversion)
    });

    it('has .last', () => {
      expect(segments.conversions.last).toEqual(secondConversion.getTime() / 1000)
    });

    it('has .lastDate', () => {
      expect(segments.conversions.lastDate).toEqual(secondConversion)
    });
  })
})
