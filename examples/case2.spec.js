describe('parallel fail', () => {
    it('should fail AssertionError', () => {
        (1+1).should.equal(10);
    });
});
