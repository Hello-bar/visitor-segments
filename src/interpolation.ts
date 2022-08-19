import {Segments} from "./index";

export class Interpolation {
  readonly #segments: Segments;

  constructor(segments: Segments) {
    this.#segments = segments
  }

  // Usage:
  //    segments.set('name', 'Anton')
  //    segments.visits.count => 999
  //    systemTags("%{name} visited %{visits.count} times") #> "Anton visited 999 times"
  run(input: string) {
    return this.customTags(this.systemTags(input))
  }

  // Usage:
  //    segments.set('name', 'Anton')
  //    customTags("%{name}") #> "Anton"
  private customTags(input: string) {
    return this.runMatches(input, /%{(\w+)}/g, (name: string) => {
      const [tag, key] = name
      const value = this.getCustomValue(key)
      return [tag, value]
    })
  }

  // Usage:
  //    segments.visits.count => 999
  //    systemTags("%{visits.count}") #> "999"
  private systemTags(input: string) {
    return this.runMatches(input, /%{(\w+)\.(\w+)}/g, (name: string) => {
      const [tag, module, key] = name
      const value = this.getModuleValue(module, key)
      return [tag, value]
    })
  }

  private runMatches(input: string, regexp: RegExp, tagAndValue: Function) {
    let output: string = input
    let match

    while ((match = regexp.exec(input)) !== null) {
      const name = match[0]
      const [tag, value] = tagAndValue(name)
      output = output.replace(tag, value)
    }

    return output
  }

  private getModuleValue(module: any, key: any) {
    const tag = `${module}.${key}`
    // @ts-ignore
    return this.safeValue(tag, () => this.#segments[module][key])
  }

  private getCustomValue(key: any) {
    return this.safeValue(key, () => this.#segments.get(key))
  }

  private safeValue(key: string, getter: Function) {
    let value
    try {
      value = getter()
    } catch (e) {
      console.log(e, `can't interpolate %{${key}} tag`)
      value = ''
    }
    return value || ''
  }
}
