'use strict';

module.exports = (selector, value, divider, obj) => {
    if (!obj) {
        obj = divider || {};
        divider = '.';
    }
    
    const result = obj;
    
    check(selector);
    
    selector.split(divider)
        .forEach((name, i, arr) => {
            if (i === arr.length - 1)
                obj[name] = value;
            else if (!obj[name])
                obj[name] = {};
            
            obj = obj[name];
        });
    
    return result;
};

function check(selector) {
    if (typeof selector !== 'string')
        throw Error('selector should be string!');
}

