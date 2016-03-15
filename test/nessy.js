'use strict';

let test    = require('tape');
let nessy   = require('../src/nessy');

test('arguments: no', (t) => {
    t.throws(nessy, /selector should be string!/, 'should throw when no path');
    t.end();
});

test('result: should return nested object', (t) => {
    const actual        = nessy('hello.world');
    const expected      = {
        hello: {
            world: undefined
        }
    };
    
    t.deepEqual(actual, expected, 'should return object');
    t.end();
});

test('result: should modify object', (t) => {
    let obj             = {};
    const actual        = nessy('hello.world', 'good', obj);
    t.deepEqual(actual, obj, 'object should be changed');
    t.end();
});
