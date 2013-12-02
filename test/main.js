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

describe('create table in db test', function() {
    describe('with String arguments, callback and no db with the same name.', function() {
        it('returns error object or null if ok', function() {
            blitz.createTable('users', '(  id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, name TEXT, UNIQUE(username, name))', function(error){
            	
            	should.not.exist(error);
            });
        });
    });
});