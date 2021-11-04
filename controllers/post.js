const {
	get_all_posts,
	create_post,
	update_post,
	delete_post
} = require('../models/posts')
const { get_user } = require('../models/users')

const GetPosts = (req, res) => {
	get_all_posts((error, result) => {
		return res.send(result)
	})
}

const CreatePost = (req, res) => {
	const { title, content } = req.body
	if(!(title && content)) {
		return res.send({
			success: false,
			message: 'Please provide all fields'
		})
	} else {
		get_user(req.user.id, (error, result) => {
			if(result) {
				const data = {
					title,
					content,
					userName: result.name,
					userId: result.id
				}
				create_post(data, (error, result) => {
					if(error) return res.send(error)
					else {
						return res.send({
							success: true,
							message: 'Posts is created!'
						})
					}
				})
			}
		})
	}
}

const UpdatePost = (req, res) => {
	const { title, content } = req.body
	if(!(title && content)) {
		return res.send({
			success: false,
			message: 'Please provide all fields!'
		})
	} else {
		const data = {
			id: req.params.id,
			userId: req.user.id,
			title,
			content,
		}
		update_post(data, (error, result) => {
			if(error) return res.send(error)
			else if(!result) return res.send({
				success: false,
				message: 'You are not the post author!'
			})
			else {
				return res.send(result)
			}
		})
	}
}

const DeletePost = (req, res) => {
	delete_post({ id: req.params.id, uid: req.user.id }, (error, result) => {
		if(error) return res.send(error)
		else {
			return res.send(result)
		}
	})
}

module.exports = { GetPosts, CreatePost, UpdatePost, DeletePost }
