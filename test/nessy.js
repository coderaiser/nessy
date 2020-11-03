'use strict';

const test = require('supertape');
const nessy = require('..');

test('arguments: no', (t) => {
    t.throws(nessy, /selector should be string!/, 'should throw when no path');
    t.end();
});

test('result: should return nested object', (t) => {
    const actual = nessy('hello.world');
    const expected = {
        hello: {
            world: undefined,
        },
    };
    
    t.deepEqual(actual, expected, 'should return object');
    t.end();
});

test('result: should set object\'s property', (t) => {
    const actual = nessy('hello', 'world', {
        hello: 'something',
    });
    
    const expected = {
        hello: 'world',
    };
    
    t.deepEqual(actual, expected, 'should return object');
    t.end();
});

test('result: should set object\'s property, when there is parent node', (t) => {
    const actual = nessy('hello.world', 'anyone', {
        hello: {
            world: 'someone',
            cloud: true,
        },
    });
    
    const expected = {
        hello: {
            world: 'anyone',
            cloud: true,
        },
    };
    
    t.deepEqual(actual, expected, 'should not clear parent node');
    t.end();
});

test('nessy: custom divider', (t) => {
    const actual = nessy('hello*world', 'anyone', '*', {
        hello: {
            world: 'someone',
            cloud: true,
        },
    });
    
    const expected = {
        hello: {
            world: 'anyone',
            cloud: true,
        },
    };
    
    t.deepEqual(actual, expected, 'should not clear parent node');
    t.end();
});

test('result: should modify object', (t) => {
    const obj = {};
    const actual = nessy('hello.world', 'good', obj);
    
    t.deepEqual(actual, obj, 'object should be changed');
    t.end();
});

test('nessy: prototype pollution: __proto__', (t) => {
    const obj = {};
    nessy('a/__proto__/polluted', 'Yes! Its Polluted', '/', obj);
    
    t.notOk({}.polluted);
    t.end();
});

test('nessy: prototype pollution: prototype', (t) => {
    const obj = {};
    nessy(
        'a/constructor/prototype/polluted',
        'Yes! Its Polluted',
        '/',
        obj,
    );
    
    t.notOk({}.polluted);
    t.end();
});

