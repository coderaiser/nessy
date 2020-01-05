# Nessy [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Set value in nested object.

## Install

`npm i nessy --save`

## Hot to use?

```js
const nessy = require('nessy');

nessy('hello.world', 'why not?', '.', {
    hello: {
        world: {
            'could be used in browser as well'
        }
    }
});

// returns
{
    hello: {
        world: {
            'why not?'
        }
    }
}

nessy('hello*world', 'why not?', '*', {
    hello: {
        world: {
            'can be used any divider'
        }
    }
});

// returns
{
    hello: {
        world: {
            'why not?'
        }
    }
}
```

## Related

- [jessy](https://github.com/coderaiser/jessy "jessy") - get value by object property.
- [all-object-keys](https://github.com/coderaiser/all-object-keys "all-object-keys") - get all keys of object.
- [finicky](https://github.com/coderaiser/finicky "finicky") delete property of an object

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/nessy.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/nessy/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/nessy.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/nessy "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/nessy  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/nessy "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/nessy?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/nessy/badge.svg?branch=master&service=github
