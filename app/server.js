const express = require('express')
const ENV = require('dotenv').config({
	path: './config/.env'
}).parsed
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const PORT = ENV.NODE_ENV === 'production' ? ENV.PORT : ENV.DEV_PORT

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('app/views'))
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())

app.get('*', (req, res, next) => {

	const CSS_FILE = './public/styles/critical.css'
	fs.readFile(CSS_FILE, 'utf8', (err, data) => {
		if (err) {
			return console.log(err)
		}
		if (data) {
			app.locals.criticalCSS = data
		}

		next()
	})

	if (ENV.NODE_ENV !== 'production'){
		app.locals.environment = 'development'
	}

})

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(PORT, () => {

	console.log(`Hello from http://localhost:${ PORT }`)

})