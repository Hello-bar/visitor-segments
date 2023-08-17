/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://test.io/?utm_term=term&utm_campaign=campaign&utm_content=content&utm_medium=medium&utm_source=source&custom_param=foo"}
 */
import { segments } from '../__test__lib/segments';

const firstVisit: Date = new Date('2020-01-01T00:00');

describe('Segments.params', () => {
  beforeAll(() => {
    segments.clear();
    jest.useFakeTimers().setSystemTime(firstVisit);
  });
  beforeAll(() => { segments.visit() });

  it('has .term', () => {
    expect(segments.params.term).toEqual('term');
  });

  it('has .campaign', () => {
    expect(segments.params.campaign).toEqual('campaign');
  });

  it('has .content', () => {
    expect(segments.params.content).toEqual('content');
  });

  it('has .medium', () => {
    expect(segments.params.medium).toEqual('medium');
  });

  it('has .source', () => {
    expect(segments.params.source).toEqual('source');
  });

  it('has .params', () => {
    expect(segments.params.all).toEqual({
      utm_term: 'term',
      utm_campaign: 'campaign',
      utm_content: 'content',
      utm_medium: 'medium',
      utm_source: 'source',
      custom_param: 'foo',
    });
  });
});
