'use strict';

module.exports = (selector, value, divider, obj) => {
    if (!obj) {
        obj = divider || {};
        divider = '.';
    }
    
    const result = obj;
    
    check(selector);
    
    const arr = selector.split(divider);
    
    for (let i = 0; i < arr.length ; i++) {
        const name = arr[i];
        if (name === '__proto__' ||
           (name == 'prototype' && i>0 && arr[i-1] == 'constructor')
          ) {
            continue;
        }
        
        if (i === arr.length - 1)
            obj[name] = value;
        else if (!obj[name])
            obj[name] = {};
        
        obj = obj[name];
    }
    
    return result;
};

function check(selector) {
    if (typeof selector !== 'string')
        throw Error('selector should be string!');
}

