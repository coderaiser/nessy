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

