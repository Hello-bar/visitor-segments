/**
 * @jest-environment jsdom
 */
import { adSegments, adAdapter } from '../__test__lib/segments';
const firstVisit: Date = new Date('2020-01-01T00:00');

describe('Segments.adBlocker', () => {
  beforeAll(() => {
    adSegments.clear();
    jest.useFakeTimers().setSystemTime(firstVisit);
  });

  beforeAll(() => {
    adSegments.visit();
  });

  describe('when ad blocker detected info', () => {
    it('has .adBlockerDetect', () => {
      expect(adSegments.adBlocker.adBlockerDetect).toEqual(false);
    });
  });

  describe('when there is no ad blocker detected info', () => {
    beforeAll(() => {
      adAdapter.set('isEnabled', true);
      adSegments.visit();
    });

    it('has .adBlockerDetect', () => {
      expect(adSegments.adBlocker.adBlockerDetect).toEqual(true);
    });
  });
});
