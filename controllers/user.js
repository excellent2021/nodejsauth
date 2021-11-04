const { create_user, login_user, get_user } = require('../models/users')
const bcrypt = require('bcryptjs')
const create_token = require('./token')

const Register = async (req, res) => {
	const { name, email, password } = req.body
	const hashPass = await bcrypt.hash(password, 8)
	const data = {
		name,
		email,
		password: hashPass
	}
	create_user(data, (error, result) => {
		if(result) {
			console.log(result)
			return res.send({
				success: true,
				message: 'user is created!'
			})
		} else {
			return res.send({
				success: false,
				message: 'Email is already use!'
			})
		}
	})
}

const Login = (req, res) => {
	const { email, password } = req.body
	if(!(email && password)) {
		return res.send({
			success: false,
			message: 'Please provide all fields!'
		})
	} else {
		const data = {
			email,
			password
		}
		login_user(data, async (error, result) => {
			if(result) {
				const token = await create_token(result.id)
				return res.cookie('auth_token', token).send({
					success: true,
					message: 'Login success!',
					token: token,
					user: result
				})
			} else {
				return res.send({
					success: false,
					message: error
				})
			}
		})
	}
}

const GetUser = (req, res) => {
	get_user(req.user.id, (error, result) => {
		if(error) return res.send(error)
		else {
			return res.send({
				success: true,
				message: 'User found',
				user: result
			})
		}
	})
}

module.exports = {
	Register,
	Login,
	GetUser
}
