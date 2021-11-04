const express = require('express')
const {
	Register, Login, GetUser
} = require('../controllers/user')
const verify_token = require('./verify')

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/user', verify_token, GetUser)

router.get('/logout', verify_token, (req, res) => {
	if(res.clearCookie('auth_token')) {
		res.send({
			success: true,
			message: 'Logout success!'
		})
	}
})

module.exports = router

