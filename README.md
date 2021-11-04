# NODE MYSQL REST API

Using Node js, Express js, MYSQL, jsonwebtoken and Http Only cookies

Install All project dependencies: 
```bash

npm install 

```

Install nodemon globaly: 
```bash

npm install -g nodemon

```

Run project: 
```bash

npm run dev
npm start

```

Add your MYSQL database details to this file { file: './config/mysql.js' }

```javascript

const db = mysql.createConnection({
	host: YOUR_MYSQL_HOST_NAME,
	user: YOUR_MYSQL_HOST_USER,
	password: YOUR_MYSQL_HOST_PASSWORD,
	database: YOUR_MYSQL_HOST_DATABASE_NAME
})

```

Thanks;

