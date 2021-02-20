'use strict';

module.exports = (err) => {
    const message = err.toString();
    
    if (message === '[object Error]' || message === '[object Object]') {
        return err.message;
    }

    return message;
};
