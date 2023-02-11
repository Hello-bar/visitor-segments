import { AbstractSegments } from './abstractSegments';

export class Interpolation {
  readonly #segments: AbstractSegments;

  constructor(segments: AbstractSegments) {
    this.#segments = segments;
  }

  // Usage:
  //    segments.set('name', 'Anton')
  //    segments.visits.count => 999
  //    systemTags("%{name} visited %{visits.count} times") #> "Anton visited 999 times"
  run(input: string) {
    return this.customTags(this.systemTags(input));
  }

  // Usage:
  //    segments.set('name', 'Anton')
  //    customTags("%{name}") #> "Anton"
  private customTags(input: string) {
    return this.runMatches(input, /{{(\w+)}}/g, (name: RegExpExecArray) => {
      const [tag, key] = name;
      const value = this.getCustomValue(key);
      return [tag, value];
    });
  }

  // Usage:
  //    segments.visits.count => 999
  //    systemTags("%{visits.count}") #> "999"
  private systemTags(input: string) {
    return this.runMatches(input, /{{(\w+)\.(\w+)}}/g, (name: RegExpExecArray) => {
      const [tag, module, key] = name;
      const value = this.getModuleValue(module, key);
      return [tag, value];
    });
  }

  private runMatches(input: string, regexp: RegExp, tagAndValue: (match: RegExpExecArray) => string[]) {
    let output: string = input;
    let match = regexp.exec(input);

    while (match !== null) {
      const [tag, value] = tagAndValue(match);
      output = output.replace(tag, value);
      match = regexp.exec(input);
    }

    return output;
  }

  private getModuleValue(module: any, key: any) {
    const tag = `${module}.${key}`;
    // @ts-ignore
    return this.safeValue(tag, () => this.#segments[module][key]);
  }

  private getCustomValue(key: any) {
    return this.safeValue(key, () => this.#segments.get(key));
  }

  private safeValue(key: string, getter: () => string) {
    let value;
    try {
      value = getter();
    } catch (e) {
      console.debug(e, `can't interpolate %{${key}} tag`);
      value = '';
    }
    return value || `{{${key}}}`;
  }
}
