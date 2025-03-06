'use strict';

const isNumber = (a) => !Number.isNaN(a) && typeof a === 'number';
const isNumberLike = (a, b = Number(a)) => isNumber(b);
const isString = (a) => typeof a === 'string';
const notSecure = (a) => /__proto__|prototype/.test(a);

module.exports = (selector, value, divider, obj) => {
    if (!obj) {
        obj = divider || {};
        divider = '.';
    }
    
    const result = obj;
    
    check(selector);
    
    const array = selector
        .split(divider)
        .filter(Boolean);
    const n = array.length - 1;
    
    for (const [i, name] of array.entries()) {
        if (notSecure(name))
            continue;
        
        if (i === n) {
            obj[name] = value;
        } else if (!obj[name]) {
            const nextKey = array[i + 1];
            
            obj[name] = isNumberLike(nextKey) ? [] : {};
        }

        
        obj = obj[name];
    }
    
    return result;
};

function check(selector) {
    if (!isString(selector))
        throw Error('selector should be string!');
}
