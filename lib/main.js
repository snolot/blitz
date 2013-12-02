var db;
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

module.exports.createDatabase = function(strDatabaseName, fnCallback){
	var file 	= strDatabaseName+'.sqlite3';
    var exists 	= fs.existsSync(file);

    console.log("createDb "+strDatabaseName);
   	db = new sqlite3.Database(strDatabaseName+'.sqlite3', fnCallback);
   	

}