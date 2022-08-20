/**
 * @jest-environment jsdom
 */
import { segments } from './lib/segments';

const firstVisit: Date = new Date('2020-01-01T00:00');
const secondVisit = new Date('2020-01-01T02:00');
const lastVisit = new Date('2020-01-01T04:00');

describe('Segments.session', () => {
  beforeAll(() => {
    segments.clear();
    jest.useFakeTimers().setSystemTime(firstVisit);
  });
  beforeAll(async () => await segments.visit());

  it('has .count', () => {
    expect(segments.session.count).toEqual(1);
  });

  it('has .uuid', () => {
    expect(segments.session.uuid).toMatch(/\w{8}-\w{4}-4\w{3}-\w{4}-\w{12}/);
  });

  describe('in 2 hours', () => {
    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(secondVisit);
    });
    beforeAll(async () => await segments.visit());

    it('has .count', () => {
      expect(segments.session.count).toEqual(2);
    });
  });

  describe('in next 2 hours', () => {
    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(lastVisit);
    });
    beforeAll(async () => await segments.visit());

    it('has .count', () => {
      expect(segments.session.count).toEqual(3);
    });
  });

  describe('when .end called', () => {
    beforeAll(() => {
      jest.useFakeTimers().setSystemTime(lastVisit);
    });
    beforeAll(async () => await segments.visit());

    it('starts new session on next visit', async () => {
      segments.session.end();
      expect(segments.session.count).toEqual(3);
      await segments.visit();
      expect(segments.session.count).toEqual(4);
      await segments.visit();
      expect(segments.session.count).toEqual(4);
    });
  });
});
