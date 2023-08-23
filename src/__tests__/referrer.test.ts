/**
 * @jest-environment jsdom
 * @jest-environment-options {"referrer": "https://example.com/?search=terms"}
 */
import { segments } from '../__test__lib/segments';

const firstVisit: Date = new Date('2020-01-01T00:00');

describe('Segments.referrer', () => {
  beforeAll(() => {
    segments.clear();
    jest.useFakeTimers().setSystemTime(firstVisit);
  });
  beforeAll(() => { segments.visit(); });

  it('has .referrer', () => {
    expect(segments.referrer.referrer).toEqual('example.com/?search=terms');
  });

  it('has .originalReferrer', () => {
    expect(segments.referrer.originalReferrer).toEqual('example.com/?search=terms');
  });

  it('has .referrerDomain', () => {
    expect(segments.referrer.referrerDomain).toEqual('example.com');
  });

  it('has .previousPage', () => {
    expect(segments.referrer.previousPage).toEqual('example.com/?search=terms');
  });

  it('has .referrerTerms', () => {
    expect(segments.referrer.referrerTerms).toEqual('terms');
  });
});
