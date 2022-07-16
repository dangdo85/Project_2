require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')



const petRoutes = require('./controller/pet_routes')
const itemRoutes = require('./controller/item_routes')
const userRoutes = require('./controller/user_routes')

const app = require('liquid-express-views')(express())
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


const session = require('express-session')
const MongoStore = require('connect-mongo')



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

// this is middleware
// everything in userRoutes must start with /users
app.use('/adopt-a-paw/pets', petRoutes)
app.use('/adopt-a-paw/items', itemRoutes)
app.use('/users', userRoutes)

// app.get('/adopt-a-paw/items', (req, res) => {
// 	res.send('item index from server')
// })

app.get('/', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})
app.get('/adopt-a-paw', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})

app.get('/adopt-a-paw/home', (req, res) => {
	res.render('home.liquid')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})