mocha-simple-html-reporter
==========================

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Dependency Status][david-img]][david]

[npm]:          https://www.npmjs.org/package/mocha-simple-html-reporter
[npm-img]:      https://img.shields.io/npm/v/mocha-simple-html-reporter.svg

[travis]:       https://travis-ci.org/blond/mocha-simple-html-reporter
[test-img]:     https://img.shields.io/travis/blond/mocha-simple-html-reporter.svg?label=tests

[david]:        https://david-dm.org/blond/mocha-simple-html-reporter
[david-img]:    http://img.shields.io/david/blond/mocha-simple-html-reporter.svg?style=flat

This is a custom reporter for use with the Javascript testing framework, [mocha](http://mochajs.org/). It generates a HTML/CSS report that helps visualize your test suites.

Sample Report
-------------

![Sample Report](https://cloud.githubusercontent.com/assets/2225579/18583359/d5f0c0b6-7c12-11e6-8c73-d606497a4878.png)

Install
-------

```
$ npm install --save-dev mocha-simple-html-reporter
```

Usage
-----

Tell mocha to use this reporter:

```shell
$ mocha testfile.js --reporter mocha-simple-html-reporter --reporter-options output=report.html
```

By default, it will output to the console. To write directly to a file, use `--reporter-options output=filename.html`.

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
