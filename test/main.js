var should	= require('should');
var blitz 	= require('../lib/main');

describe('createDatabase', function() {
    describe('with no arguments', function() {
        it('returns an empty array', function() {
            var result = sleepsort();
            result.should.eql([]);
        });
    });
});