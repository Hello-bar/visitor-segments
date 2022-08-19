<p align="center">
  <a href="https://badge.fury.io/js/jest">
    <img src="https://badge.fury.io/js/visitor-segments.svg" alt="npm version">
  </a>
  <a href="https://github.com/facebook/jest/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="VisitorSegments is released under the MIT license." />
  </a>
</p>

<p align="center">
  <a href="https://github.com/Hello-bar/visitor-segments/actions/workflows/nodejs.yml"><img alt="GitHub CI Status" src="https://img.shields.io/github/workflow/status/facebook/jest/Node%20CI?label=CI&logo=GitHub"></a>
  <a href="https://codecov.io/github/Hello-bar/visitor-segments"><img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/Hello-bar/visitor-segments/main.svg?maxAge=43200"></a>
</p>

# Hellobar.Segments

Version 1.0

August, 2022

<br/>

## Examples

First of all we need to configure IPApiProvider if you have a pro key

```js
  IPApiProvider.key = "pro.ip-api.com secret key"
```

Then, we can get an instance of Segments class 

```  
  const segments = new Segments("scope")
```

`scope` - is a key in your storage (i.e LocalStorageAdapter)


Call the `visit` method to set/increment all the segments

```js
  await segments.visit()
  segments.visits.count == 1
  segments.geolocation.city == 'Miami'
```
