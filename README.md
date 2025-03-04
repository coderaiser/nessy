# Nessy [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]: https://img.shields.io/npm/v/nessy.svg?style=flat
[BuildStatusURL]: https://github.com/coderaiser/nessy/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/nessy/workflows/Node%20CI/badge.svg
[NPMURL]: https://npmjs.org/package/nessy "npm"
[CoverageURL]: https://coveralls.io/github/coderaiser/nessy?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/nessy/badge.svg?branch=master&service=github

Set value in nested object.

## Install

`npm i nessy --save`

## Hot to use?

```js
const nessy = require('nessy');

nessy('hello.world', 'why not?', '.', {
    hello: {
        world: 'could be used in browser as well',
    },
});

// returns
({
    hello: {
        world: 'why not?',
    },
});

nessy('hello*world', 'why not?', '*', {
    hello: {
        world: 'can be used any divider',
    },
});

// returns
({
    hello: {
        world: 'why not?',
    },
});

// even arrays supported
nessy('hello.0', 'world', {});
// returns
({
    hello: ['world'],
});
```

## Related

- [jessy](https://github.com/coderaiser/jessy "jessy") - get value by object property.
- [all-object-keys](https://github.com/coderaiser/all-object-keys "all-object-keys") - get all keys of object.
- [finicky](https://github.com/coderaiser/finicky "finicky") delete property of an object

## License

MIT
