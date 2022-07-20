const express = require('express')

// importing pet model to access database
const Pet = require('../models/pet')

// making a router
const router = express.Router()


// DELETE - Delete
router.delete('/:id', (req, res) => {
    const petId = req.params.id
    // console.log('petId', petId)
    Pet.findByIdAndRemove(petId)
        .then(pet => {
            res.redirect('/adopt-a-paw/pets/index')
        })
        .catch(err => {
            res.json(err)
        })
})

// GET route for displaying an update form
router.get('/:id/edit', (req, res) => {
    const petId = req.params.id
    const loggedIn = req.session.loggedIn
    if (req.session.loggedIn) {
    Pet.findById(petId)
        .then(pet => {
            res.render('pets/edit', { pet })
        })
        .catch(err => {
            res.json(err)
        })
    } else {
        res.redirect("/users/login")
    }
})

// PUT - Update
// localhost:3000/adopt-a-paw/pets/:id
router.put('/:id', (req, res) => {
    const petId = req.params.id

    Pet.findByIdAndUpdate(petId, req.body, { new: true })
        .then(pet => {
            res.redirect(`${pet._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

// // // // GET route for displaying my form for create
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    if (req.session.loggedIn) {
    res.render('pets/new', { username, loggedIn })
    } else{
        res.redirect("/users/login")
    }
})

// POST - Create
router.post('/index', (req, res) => {

    // now that we have user specific pets, we'll add a username upon creation
    // remember, when we login, we saved the username to the session object
    // using the ._id to set the owner field
    
    req.body.owner = req.session.userId

    console.log(req.body)
    Pet.create(req.body)
        .then(pet => {
            console.log(pet)
            res.redirect('/adopt-a-paw/pets/index')
        })
        .catch(err => {
            res.json(err)
        })
})

// GET - Index
// localhost:3000/adopt-a-paw/pets/index
router.get('/index', (req, res) => {
        // mongoose to find all pets
        Pet.find({})
        // return pets as json
        .then(pets => {
        res.render('pets/index', { pets })
        })
        .catch(err => {
            res.json(err)
        })
})

// my_account route is in user_routes



// GET - Show
// localhost:3000/adopt-a-paw/items/:id <- change with the id being passed in
router.get('/:id', (req, res) => {
    const petId = req.params.id
    // console.log('petId', petId)
    // console.log('param', req.params.id)
    Pet.findById(petId)
    // populate our User models fields
    // comment has an author field and that is the ref to the User model
    // always going to be a string of the value you want to populate
    // this also has to be anohter model 
        // send back some json
        .then(pet => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('pets/show', { pet, userId, username })
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router