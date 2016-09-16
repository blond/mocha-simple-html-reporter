'use strict';

const path = require('path');

module.exports = () => {
    const mochaMainFilename = require.resolve('mocha');
    const mochaDirname = path.dirname(mochaMainFilename);

    return path.join(mochaDirname, 'mocha.css');
};
