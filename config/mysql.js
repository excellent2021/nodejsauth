const mysql = require('mysql')

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'rootpass',
	database: 'node'
})

module.exports = db
