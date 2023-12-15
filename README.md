<p align="center">
  <a href="https://badge.fury.io/js/visitor-segments">
    <img src="https://badge.fury.io/js/visitor-segments.svg" alt="npm version">
  </a>
  <a href="https://github.com/facebook/jest/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="VisitorSegments is released under the MIT license." />
  </a>
  <a href="https://codecov.io/github/Hello-bar/visitor-segments"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/Hello-bar/visitor-segments/main.svg?maxAge=43200"></a>
</p>

# Hellobar.Segments

## Installation

Install with either yarn or npm:

```zsh
yarn add visitor-segments
#or
npm install --save visitor-segments
```

## Configure

In order to use [pro.ip-api.com](https://pro.ip-api.com) configure IPApiProvider.
Otherwise, it will be using public [ip-api.com](https://ip-api.com) with the limit of 45 HTTP requests per minute from an IP address.

```js
  IPApiProvider.key = "pro.ip-api.com secret key"
```

## Usage

```ts  
  import Segments from 'visitor-segments'
  
  const scope = 'default'
  const segments = new Segments(scope)
  
  await segments.visit()

  segments.visits.count === 1
  segments.geolocation.city === 'Miami'
  segments.page.path == window.location.pathname
  segments.page.device == 'computer'

  await segments.visit()
  segments.visits.count == 2

  // custom data
  segments.set('coupon', 'SPECIAL10')

  const message = segments.interpolate("Here's your coupon: {{ coupon }}")
  message ===  "Here's your coupon: SPECIAL10"
```

## Modules

```ts
import {segments} from "visitor-segments";

// Visits
segments.visits.count
segments.visits.first
segments.visits.firstDate
segments.visits.last
segments.visits.lastDate
segments.visits.daysFromFirst
segments.visits.daysFromLast

// Session
segments.session.count
segments.session.uuid

// Referrer
segments.referrer.originalReferrer
segments.referrer.referrer
segments.referrer.referrerDomain
segments.referrer.referrerTerms
segments.referrer.previousPage

// Page
segments.page.device // mobile, tablet or computer
segments.page.cookies // cookies object
segments.page.date // current date as string 2000-01-01 
segments.page.dayOfWeek  
segments.page.url //location.href
segments.page.path // location.pathname 
segments.page.urlKeywords // words from the current url  

// Params

// utm_* params, stored forever once appeared
// so that even if utm_* isn't in the current url you may have it here 
segments.params.campaign   
segments.params.content  
segments.params.medium   
segments.params.source   
segments.params.term 

// all current params  
segments.params.all 

// Conversions
segments.conversions.count 
segments.conversions.first 
segments.conversions.firstDate 
segments.conversions.last  
segments.conversions.lastDate

// Geolocation
segments.geolocation.city
segments.geolocation.region
segments.geolocation.regionName
segments.geolocation.country
segments.geolocation.countryName
segments.geolocation.timezone
segments.geolocation.mobileCell // true or false

// Callbacks 
segments.onUpdate((key, value) => {
  console.log(key, value)
})

// Additional in memory store in case you want to use it for interpolation
interface DataStorage {
  set(key: string, value: any): void;
  get(key: string): string | number;
  onUpdate(handler: UpdateKeyHandler): void;
}
const extraStorage = new DataStorage()
const segments = new Segments(scope, { extraStorage })
extraStorage.set('testKey', 1)
segments.get('testKey') === 1
segments.interpolate('in memory value: {{testKey}}') === 'in memory value: 1'
// testKey will disappear after page reload
```

## Build your own Segments

```ts
import {Segment, SegmentsAdapters, AbstractSegments, SegmentClassMap, ValueStorageInterface} from "visitor-segments";

class FooSegment extends Segment {
  constructor(visitor: ValueStorageInterface) {
    super(SEGMENT_KEYS.FOO, visitor);
  }

  setValue() {
    //super.setValue(Math.random());
    super.setValueOnce(Math.random());
  }
}

export enum SEGMENT_KEYS {
  FOO = 'f'
}

export const SEGMENTS: SegmentClassMap = {
  [SEGMENT_KEYS.FOO]: FooSegment
}

export class MySegments extends AbstractSegments {
  #foo: FooSegment;

  constructor(scope: string, options?: SegmentsAdapters) {
    super(scope, {...options, segmentsMap: SEGMENTS})
    this.#foo = this.getSegmentByKey(SEGMENT_KEYS.FOO)
  }

  get foo(): number {
    return this.#foo.value
  }
  
  async visit() {
    await super.visit()
    this.#foo.setValue()
  }
}

const segments = new MySegments('default')
segments.visit()
```


## Development

Run tests

```zsh
yarn watch
```

1. Write your code.
2. All tests must pass.
3. Commit the code.
4. Publishing New Version
This package follows semantic versioning. To publish a new version:

```zsh
yarn publish
```

----
License

visitor-segments is released under the MIT license.
