'use strict';

module.exports = (data) => `
<head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
    ${data.css}
    #mocha .test.pass pre {
        display: none;
    }
    #mocha .test:hover h2:after {
        color: #888888;
        content: "(view source)";
        font-family: arial;
        font-size: 12px;
        position: relative;
        right: -10px;
        top: 0;
    }
    </style>
</head>
`;
