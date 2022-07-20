require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
// const expressValidator = require('express-validator');

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
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');


app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.MONGODB_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

// const hbs = require('express-hbs');
// const path = require('path');

app.use(express.static('public'));

// app.engine('hbs', hbs.express4({
//    partialsDir: __dirname + '/views/partials'
//  }));
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
// app.use(cookieParser());
// app.use(session({secret: 'krunal', saveUninitialized: false, resave: false}));
// const blockchain = require('./routes/blockchain.route');

// app.use('/blockchain',blockchain);

app.use('/adopt-a-paw/pets', petRoutes)
app.use('/adopt-a-paw/items', itemRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})
app.get('/adopt-a-paw', (req, res) => {
	res.redirect('/adopt-a-paw/home')
})

app.get('/adopt-a-paw/home', (req, res) => {
	const loggedIn = req.session.loggedIn
	res.render('home.liquid', {loggedIn})	
})

// const PORT = process.env.PORT

// app.listen(PORT, () => {
// 	console.log(`app is listening on port: ${PORT}`)
// })


app.listen(process.env.PORT || 3000)