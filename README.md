Nessy
=======

Set value in nested object.

## Install

`npm i nessy --save`

## Hot to use?

```js
var nessy = require('nessy');

nessy('hello.world', 'why not?', {
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
```

## License

MIT
