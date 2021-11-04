const JWT = require('jsonwebtoken')

const verify_token = async (req, res, next) => {
	const get_token = req.cookies.auth_token
	try {
		const verify = await JWT.verify(get_token, "scretetoken&&&token")
		req.user = verify
		next()
	} catch(error) {
		res.send(error)
	}
}

module.exports = verify_token
