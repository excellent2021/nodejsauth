const JWT = require('jsonwebtoken')

const create_token = async (id) => {
	const token = await JWT.sign({ id }, "scretetoken&&&token")
	return token
}

module.exports = create_token
