const express = require('express')
const ENV = require( 'dotenv' ).config().parsed
const bodyParser = require( 'body-parser' )
const app = express()
const PORT = ENV.NODE_ENV === 'production' ? ENV.PORT : ENV.DEV_PORT

app.set( 'views', './views' )
app.set( 'view engine', 'ejs' )

app.use( bodyParser.urlencoded( {
	extended: false
} ) )
app.use( bodyParser.json() )

app.get( '/', ( req, res ) => {
	res.render('index')
})

app.listen( PORT, () => {

	console.log( `Hello from http://localhost:${ PORT }` )

} )