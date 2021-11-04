const db = require('../config/mysql')

const get_all_posts = (callback) => {
	db.query('SELECT * FROM posts', [], (error, results) => {
		if(error) callback(error)
		else callback(null, results)
	})
}

const create_post = (data, callback) => {
	db.query('INSERT INTO posts(title, content, username, userid) VALUES(?,?,?,?)', [data.title, data.content, data.userName, data.userId], (error, results) => {
		if(error) callback(error)
		else {
			callback(null, 'Post is created!')
		}
	})
}

const update_post = (data, callback) => {
	db.query('SELECT id FROM posts WHERE userid = ?', [data.userId], (error, results) => {
		if(error) callback(error)
		else {
			db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [data.title, data.content, data.id], (error, results) => {
				if(error) callback(error)
				else {
					callback(null, { success: true, message:'Post is updated!' })
				}
			})
		}
	})
}

const delete_post = (data, callback) => {
	db.query('SELECT * FROM posts WHERE userId = ?', [data.uid], (error, results) => {
		if(!error) {
			db.query('DELETE FROM posts WHERE id = ?', [data.id], (error, results) => {
				if(results) callback(null, {
					success: true,
					message: 'Post is deleted!'
				})
			})
		} else {
			callback({
				success: false,
				message: 'You are not the post author!'
			})
		}
	})
}

module.exports = {
	get_all_posts,
	create_post,
	update_post,
	delete_post
}
