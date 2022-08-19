/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://test.io/path?foo=bar&baz=foo"}
 */
import {segments} from "./lib/segments";

let userAgentGetter:any;

beforeEach(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get')
})

beforeAll(() => {
  segments.clear()
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));
})

describe('Segments.page', () => {
  beforeEach(async () => await segments.visit())

  it('has .path', () => {
    expect(segments.page.path).toEqual('/path')
  });

  it('has .date', () => {
    expect(segments.page.date).toEqual('2020-01-01')
  });

  it('has .dayOfWeek', () => {
    expect(segments.page.dayOfWeek).toEqual(3)
  });

  it('has .urlKeywords', () => {
    expect(segments.page.urlKeywords).toEqual(['path', 'foo', 'bar', 'baz', 'foo'])
  });

  it('has .wordpressTags', () => {
    expect(segments.page.wordpressTags).toEqual([])
  });

  it('has .cookies', () => {
    expect(segments.page.cookies).toEqual({})
  });

  describe('when userAgent is a desktop', () => {
    it('.device is "computer"', () => {
      expect(segments.page.device).toEqual('computer')
    });
  })

  describe('when userAgent is ipad', () => {
    beforeEach(() => userAgentGetter.mockReturnValue('ipad'))
    beforeEach(async () => await segments.visit())

    it('.device is "tablet"', () => {
      console.log(navigator.userAgent)
      expect(segments.page.device).toEqual('tablet')
    });
  })

  describe.each([
    'mobile',
    'phone',
    'ipod',
    'blackberry',
    'docomo'
  ])('when userAgent is a %s', (useragent) => {
    beforeEach(() => userAgentGetter.mockReturnValue(useragent))
    beforeEach(async () => await segments.visit())

    it('.device is "mobile"', () => {
      expect(segments.page.device).toEqual('mobile')
    });
  })
})
