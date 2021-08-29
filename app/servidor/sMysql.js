const mysql = require("mysql");

const connection =  mysql.createPool({
	host			:	"localhost",       
	user			: 	"root",
	password		: 	"",
	database		:	"sedaxrp",
});

connection.getConnection(function(e) {
	if (e) {
		console.log("La DB no funciona");
		throw e;
	}
	else {
		console.log(`DB en funcionamiento`);
	}
});

module.exports = connection;