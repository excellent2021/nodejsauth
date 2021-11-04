const express = require('express')
const db = require('./config/mysql')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

db.connect((error) => {
	if(!error) console.log('Mysql connected!')
	else console.log(error)
})

app.use('/', require('./routes/user'))
app.use('/posts', require('./routes/post'))

app.listen(3000)
