require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = require('liquid-express-views')(express())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))

const session = require('express-session')
const MongoStore = require('connect-mongo')

// const petRoutes = require('./controller/pet_routes')
const userRoutes = require('./controller/user_routes')

app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)


// app.use('/adopt-a-paw', petRoutes)
// this is middleware
// everything in userRoutes must start with /users
app.use('/users', userRoutes)

app.get('/', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})
app.get('/adopt-a-paw', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})

app.get('/adopt-a-paw/home', (req, res) => {
	res.render('home.liquid')
})

// app.get('/adopt-a-paw/petlistings', (req, res) => {
// 	res.render('/pets/listings.liquid')
// })

// app.get('/adopt-a-paw/itemlistings', (req, res) => {
// 	res.render('/items/listings.liquid')
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})