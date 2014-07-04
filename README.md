# once.js
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]
[![GitTip][tip-image]][tip-url]

## About

Once.js is a 0.1kb micro-library that enables you to enforce a function can only be executed once. Once.js completely dependency-free and written in both CoffeeScript and JavaScript for AMD, Node.js and the Web.

This repository was scaffolded with [generator-microjs](https://github.com/daniellmb/generator-microjs) v0.0.10.

## Examples

```JavaScript
var canOnlyRunOnce = once(function() {
	console.log('That Happened!');
});
canOnlyRunOnce(); // 'That Happened!'
canOnlyRunOnce(); // *cricket cricket*
```

```CoffeeScript
canOnlyRunOnce = once(->
  console.log 'That Happened!'
)
canOnlyRunOnce() # 'That Happened!'
canOnlyRunOnce() # *cricket cricket*
```

## Install Choices
- `bower install once.js`
- [download the zip](https://github.com/daniellmb/once.js/archive/master.zip)

## Tasks

All tasks can be run by simply running `gulp` or with the `npm test` command, or individually:

  * `gulp lint` will lint source code for syntax errors and anti-patterns.
  * `gulp gpa` will analyze source code against complexity thresholds.
  * `gulp test` will run the mocha unit tests against the source code.
  * `gulp test-coffee` will run the mocha unit tests against the CoffeeScript source code.
  * `gulp test-min` will run the mocha unit tests against the minified code.

## License

(The MIT License)

Copyright (c) 2014 Daniel Lamb dlamb.open.source@gmail.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[build-url]: https://travis-ci.org/daniellmb/once.js
[build-image]: http://img.shields.io/travis/daniellmb/once.js.png

[gpa-url]: https://codeclimate.com/github/daniellmb/once.js
[gpa-image]: http://img.shields.io/codeclimate/github/daniellmb/once.js.png

[coverage-url]: https://codeclimate.com/github/daniellmb/once.js/code?sort=covered_percent&sort_direction=desc
[coverage-image]: http://img.shields.io/codeclimate/coverage/github/daniellmb/once.js.png

[depstat-url]: https://david-dm.org/daniellmb/once.js
[depstat-image]: https://david-dm.org/daniellmb/once.js/dev-status.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/once.js/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/once.js.png

[bower-url]: http://bower.io/search/?q=once.js
[bower-image]: https://badge.fury.io/bo/once.js.png

[downloads-url]: https://www.npmjs.org/package/once.js
[downloads-image]: http://img.shields.io/npm/dm/once.js.png

[npm-url]: https://www.npmjs.org/package/once.js
[npm-image]: https://badge.fury.io/js/once.js.png

[irc-url]: http://webchat.freenode.net/?channels=once.js
[irc-image]: http://img.shields.io/badge/irc-%23once.js-brightgreen.png

[gitter-url]: https://gitter.im/daniellmb/once.js
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/once.js-brightgreen.png

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.png