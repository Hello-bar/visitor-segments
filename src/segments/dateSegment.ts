import {SEGMENT_KEYS} from "../segmentMaps";
import {Segment} from "../segment";
import {ValueStorageInterface} from "../lib/interfaces"

export class DateSegment extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.DATE, visitor);
  }

  setValue(value?: any) {
    super.setValue(value || yearMonthDay(new Date()));
  }
}

// returns date in format of 'YYYY-MM-DD'
function yearMonthDay(date: Date) {
  function zeropad(string: string): string {
    const length = Math.max(string.length, 2)
    return string.length >= length ? string : `0${string}`
  }

  const month = date.getMonth() + 1
  const day = date.getDate()

  return [
    date.getFullYear(),
    zeropad(month.toString()),
    zeropad(day.toString())
  ].join('-')
}
