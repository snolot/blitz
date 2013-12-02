var db;
module.exports.db = db;

var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

module.exports.createDatabase = function(strDatabaseName, fnCallback){
	var file 	= strDatabaseName+'.sqlite3';
    var exists 	= fs.existsSync(file);

    console.log(">> createDb "+strDatabaseName);
   	db = new sqlite3.Database(strDatabaseName+'.sqlite3', fnCallback);
}

module.exports.createTable = function(strTableName, strFields, fnCallback){
	console.log(">> createTable "+strTableName);
   	if(db==undefined){
   		db = new sqlite3.Database('test.sqlite3', function(){
   			db.run("CREATE TABLE "+strTableName+" "+strFields, fnCallback);
   		});
   	}else{
  		db.run("CREATE TABLE "+strTableName+" "+strFields, fnCallback);
   	}
}