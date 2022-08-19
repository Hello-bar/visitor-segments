import {Segment} from "../segment";

export class AdSegment extends Segment {
  setValue(value: any) {
    if (value) {
      super.setValue(value);
    }
  }
}
