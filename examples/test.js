var sleep = require('deasync').sleep;

describe('Array', () => {
    describe('#indexOf()', () => {
        context('when not present', () => {
            it('should not throw an error', () => {
                (function() {
                    [1,2,3].indexOf(4);
                }).should.not.throw();
            });

            it('should return -1', () => {
                [1,2,3].indexOf(4).should.equal(-1);
            });
        });
        context('when present', () => {
            it('should return the index where the element first appears in the array', () => {
                [1,2,3].indexOf(3).should.equal(2);
            });
        });
    });
});

describe('speed', () => {
    it('should fast', () => {
        (1+1).should.equal(2);
    });

    it('should middle', () => {
        sleep(50);

        (1+1).should.equal(2);
    });

    it('should slow', () => {
        sleep(1000);

        (1+1).should.equal(2);
    });
});

describe('skip', () => {
    it.skip('should pending', () => {
        (1+1).should.equal(10);
    });
});

describe('fail', () => {
    it('should fail', () => {
        (1+1).should.equal(10);
    });
});
