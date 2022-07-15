const express = require('express')
// making a router
const router = express.Router()
// importing Fruit model to access database
const Item = require('../models/pets')


// fetch route
router.post('/', (req, res) => {
    const zipcode = req.body.zipcode
    const APIrequestUrl = `curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwN0I5dG5GZG1vdElJZVFIcGNFYXN5RzdzNlZHZHQ4TU1wZDR0VmhndUZJRGNaanZiSyIsImp0aSI6IjYwN2YxMmQ5OTBhZDJjMjNmZjRiOWM2ZmM2ZGFiNDFiMDE2NzI3MGIyY2VmM2U3NTNjMDNiZTkwNWY2OWJmN2I5YTkwMjQzYjNkMDYzODYwIiwiaWF0IjoxNjU3ODQzOTE4LCJuYmYiOjE2NTc4NDM5MTgsImV4cCI6MTY1Nzg0NzUxOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.mQEVe-An5vSKow9Ub_WmasCyHxNU9-RzNYpoOaD3PcTyHPIUEIrsrnObaL6RSyxWBVWnGDhW53U6X8zOhFh3i6wPd83obShZgmGK6p3Q03lUo9p0AjXWQca1ml85kugARN4SXlfBDh3-KVCbe311bY8Wi7kk6aUddE73ID0j73KrC13P-JAEy324SZPEH4VwCNslTuKYP_Kjczjz0FJpWxOX_KZGp4bzO6NRnA6nf3uRSHF_k-9GS3XeTflKUB-Sj3E5Z1e5VlLNRpEvQgfNxT1854IegYEkbprJAwn7jZJJpwj_HqtkMxkmYkYf8r1YEFyiBkIhFrywzJWuG5DHWQ" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
    `
    fetch(APIrequestUrl)
    .then(res => res.json())
    .then(data => {
        console.log("Bam", data)
        // res.render("show", {data})
    })
    .catch(err => {
        // console.log("Err", err)
        res.json(err)
    })
})


// // DELETE - Delete
// // router.delete('/:id', (req, res) => {
// //     const petId = req.params.id

// //     Fruit.findByIdAndRemove(petId)
// //         .then(pet => {
// //             res.redirect('/pet')
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// // GET route for displaying an update form
// // router.get('/:id/edit', (req, res) => {
// //     const petId = req.params.id

// //     pet.findById(petId)
// //         .then(pet => {
// //             res.render('pets/edit', { pet })
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// // // PUT - Update
// // // localhost:3000/fruits/:id
// // router.put('/:id', (req, res) => {
// //     const petId = req.params.id

// //     req.body.sex = req.body.sex === 'on' ? true : false

// //     Pet.findByIdAndUpdate(petId, req.body, { new: true })
// //         .then(pet => {
// //             res.redirect(`/pets/${pet._id}`)
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// // // GET route for displaying my form for create
// // router.get('/new', (req, res) => {
// //     const username = req.session.username
// //     const loggedIn = req.session.loggedIn
// //     res.render('pets/new', { username, loggedIn })
// // })

// // // POST - Create
// // router.post('/', (req, res) => {
// //     req.body.sex = req.body.sex === 'on' ? true : false

// //     // now that we have user specific fruits, we'll add a username upon creation
// //     // remember, when we login, we saved the username to the session object
// //     // using the ._id to set the owner field
    
// //     req.body.owner = req.session.userId

// //     console.log(req.body)
// //     Item.create(req.body)
// //         .then(pet => {
// //             console.log(pet)
// //             // res.json(fruit)
// //             res.redirect('/pets')
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// // // GET - Index
// // // localhost:3000/fruits
// // router.get('/', (req, res) => {
// //     // mongoose to find all fruits
// //     Pet.find({})
// //     // return fruits as json
// //         .then(items => {
// //             // res.json(fruit)
// //             res.render('pets/listings', { pet })
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

// // router.get('/mine', (req, res) => {
// //     // find the fruits associated with the logged in user
// //     Pet.find({ owner: req.session.userId })
// //         .then(pets => {
// //             res.render('pets/index', { pets })
// //         })
// //         .catch(error => {
// //             console.log(error)
// //             res.json({ error })
// //         })
// // })



// // // GET - Show
// // // localhost:3000/fruits/:id <- change with the id being passed in
// // router.get('/:id', (req, res) => {
// //     const petId = req.params.id

// //     Pet.findById(petId)
// //     // populate our User models fields
// //     // comment has an author field and that is the ref to the User model
// //     // always going to be a string of the value you want to populate
// //     // this also has to be anohter model 
// //         .populate('comments.author')
// //         // send back some json
// //         .then(pet => {
// //             // res.json(fruit)
// //             const userId = req.session.userId
// //             const username = req.session.username
// //             res.render('pets/show', { pet, userId, username })
// //         })
// //         .catch(err => {
// //             res.json(err)
// //         })
// // })

module.exports = router