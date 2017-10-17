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
    
    #hide-passes {
        cursor: pointer;
        color: #888;
        font-size: 12px;
        text-decoration-line: underline;
        text-decoration-style: dotted;
    }
    
    #hide-passes:hover {
        color: #666;
        text-decoration-style: solid;
    }
    </style>
</head>
`;
