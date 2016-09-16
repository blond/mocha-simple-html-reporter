'use strict';

const ms = require('pretty-ms');

module.exports = (data) => `
<body>
    <div id="mocha">
        <ul id="stats">
            <li class="passes">passes: <em>${data.passes}</em></li>
            <li class="failures">failures: <em>${data.failures}</em></li>
            <li class="duration">duration: <em>${ms(data.duration)}</em></li>
        </ul>
        <ul id="report">${data.report}<ul>
    </div>
    <script>
        var tests = document.getElementsByClassName('test');

        for (var i = 0; i < tests.length; i++) {
            var elem = tests[i];

            if (elem.className.includes('pass')) {
                var head = elem.children[0];

                head.onclick = function () {
                    var code = this.parentElement.children[1];
                    var display = code.style.display;

                    if (display && display === 'block') {
                        code.style.display = 'none';
                    } else {
                        code.style.display = 'block';
                    }
                };
            }
        }
    </script>
</body>
`;
