var should		= require('should');
var blitz 		= require('../lib/main');


describe('createDatabaseNoPrevious', function() {
    describe('with String arguments, callback and no db with the same name.', function() {
        it('callback returns error object or null if ok', function() {
            blitz.createDatabase('test', function(error){
            	
            	should.not.exist(error);
            });
        });
    });
});