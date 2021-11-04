const db = require('../config/mysql')

const create_user = async (data, callback) => {
	db.query('SELECT email FROM users WHERE email = ?', [data.email], (error, results) => {
		if(results.length === 0) {
			db.query('INSERT INTO users(name, email, password) VALUES(?,?,?)', [data.name, data.email, data.password], (error, results) => {
				if(error) callback(error)
				else {
					callback(null, results)
				}
			})
		} else {
			callback('Email is already use!')
		}
	})
}

const login_user = (data, callback) => {
	db.query('SELECT * FROM users WHERE email = ?', [data.email], (error, results) => {
		if(!results[0].email) {
			callback('Email is not exits!')
		} else {
			callback(null, results[0])
		}
	})
}

const get_user = (id, callback) => {
	db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
		if(error) callback(error)
		else {
			callback(null, results[0])
		}
	})
}

module.exports = {
	create_user,
	login_user,
	get_user
}
