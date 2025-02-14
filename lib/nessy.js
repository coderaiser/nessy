'use strict';

const isString = (a) => typeof a === 'string';
const notSecure = (a) => /__proto__|prototype/.test(a);

module.exports = (selector, value, divider, obj) => {
    if (!obj) {
        obj = divider || {};
        divider = '.';
    }
    
    const result = obj;
    
    check(selector);
    
    const arr = selector.split(divider);
    
    for (const [i, name] of arr.entries()) {
        if (notSecure(name))
            continue;
        
        if (i === arr.length - 1)
            obj[name] = value;
        else if (!obj[name])
            obj[name] = {};
        
        obj = obj[name];
    }
    
    return result;
};

function check(selector) {
    if (!isString(selector))
        throw Error('selector should be string!');
}
