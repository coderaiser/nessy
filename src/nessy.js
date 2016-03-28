'use strict';

module.exports = (selector, value, obj) => {
    obj = obj || {};
    
    const result = obj;
    
    check(selector);
    
    selector.split('.')
        .forEach((name, i, arr) => {
            if (typeof obj[name] === 'undefined') {
               if (i === arr.length - 1)
                   obj[name] = value;
               else
                   obj[name] = {};
            }
            
            obj = obj[name];
        });
    
    return result;
};

function check(selector) {
    if (typeof selector !== 'string')
        throw Error('selector should be string!');
}
