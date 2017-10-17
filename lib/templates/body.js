'use strict';

const ms = require('pretty-ms');

module.exports = (data) => `
<body>
    <div id="mocha">
        <ul id="stats">
            <li class="passes">passes: <em>${data.passes}</em> <a id="hide-passes">hide</a></li>
            <li class="pending">pending: <em>${data.pending}</em></li>
            <li class="failures">failures: <em>${data.failures}</em></li>
            <li class="duration">duration: <em>${ms(data.duration)}</em></li>
        </ul>
        <ul id="report">${data.report}</ul>
    </div>
    <script>
        function hideSuitesWithout(className) {
            var suites = document.querySelectorAll('#report > .suite');
        
            for (var i = 0; i < suites.length; i++) {
                let suite = suites[i];
        
                var els = suite.getElementsByClassName(className);
                if (!els.length) {
                    suite.classList.add('hidden');
                }
            }
        }
        
        function unhide() {
            var suites = document.getElementsByClassName('suite hidden');
        
            while (suites.length) {
                suites[0].classList.remove('hidden');
            }
        }
        
        function togglePasses() {    
            var report = document.getElementById('report');
        
            report.classList.toggle('hide-passes');
        
            if (report.classList.contains('hide-passes')) {
                hideSuitesWithout('test fail');
            } else {
                unhide();
            }
        }
        
        document.getElementById('hide-passes').addEventListener('click', function(e) {
            e.preventDefault();
        
            togglePasses();
        });
        
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
