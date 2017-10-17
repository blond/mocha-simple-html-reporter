'use strict';

const fs = require('fs');

const mocha = require('mocha');
const utils = mocha.utils;

const templates = require('./templates');
const findStylesheet = require('./find-stylesheet');

module.exports = function (runner, options) {
    mocha.reporters.Base.call(this, runner);

    const reporterOpts = options.reporterOptions || {};
    const stats = this.stats;
    const cssPath = findStylesheet();

    let result = '';

    runner.on('end', () => {
        const output = reporterOpts.output;
        const head = templates.head({ css: fs.readFileSync(cssPath, 'utf-8') });
        const body = templates.body({
            passes: stats.passes,
            failures: stats.failures,
            pending: stats.pending,
            duration: stats.end - stats.start,
            report: result
        });
        const html = `<html>${head}${body}</html>`;

        if (!output) {
            return console.log(html);
        }

        try {
            fs.writeFileSync(output, html);

            console.log(`The report is written in "${output}" file.`);
        } catch (err) {
            console.error(err);
        }
    });

    runner.on('suite', suite => {
        if (suite.root) { return; }

        const title = utils.escape(suite.title);

        result += '<li class="suite">';
        result += `<h1>${title}</h1>`;
        result += '<ul>';
    });

    runner.on('suite end', suite => {
        if (suite.root) { return; }

        result += '</ul>';
        result += '</li>';
    });

    runner.on('pass', test => {
        const title = utils.escape(test.title);
        const code = utils.escape(utils.clean(test.body));

        result += `<li class="test pass ${test.speed}">`;
        result += `<h2>${title}<span class="duration">${test.duration}ms</span></h2>`;
        result += `<pre><code>${code}</code></pre>`;
        result += '</li>';
    });

    runner.on('pending', test => {
        const title = utils.escape(test.title);

        result += `<li class="test pass pending">`;
        result += `<h2>${title}</h2>`;
        result += '</li>';
    });

    runner.on('fail', test => {
        const title = utils.escape(test.title);
        const stacktrace = utils.escape(test.err.stack);

        result += '<li class="test fail">';
        result += `<h2>${title}</h2>`;
        result += `<pre class="error">${stacktrace}</pre>`;
        result += '</li>';
    });
};
