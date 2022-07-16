const express = require('express')

// importing Fruit model to access database
const Pet = require('../models/pet')

// making a router
const router = express.Router()

// fetch route

// router.post('/', (req, res) => {
//     const zipcode = req.body.zipcode
//     const APIrequestUrl = https://api.petfinder.com/v2/oauth2/token
//     fetch(APIrequestUrl)
//     .then(res => res.json())
//     .then(data => {
//         // console.log("Bam", data)
//         res.render("show", {data})
//     })
//     .catch(err => {
//         // console.log("Err", err)
//         res.json(err)
//     })
// })
// fetch("https://api.petfinder.com/v2/oauth2/token", {
//   body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET}`,
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   method: "POST"
// })

// fetch("https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}", {
//   headers: {
//     Authorization: `Bearer ${TOKEN}`
//   }
// })

// // router.post('/', (req, res) => {
// //     const zipcode = req.body.zipcode
// //     const APIrequestUrl = 
// //     fetch(APIrequestUrl)
// //     .then(res => res.json())
// //     .then(data => {
// //         console.log("Bam", data)
// //         // res.render("show", {data})
// //     })
// //     .catch(err => {
// //         // console.log("Err", err)
// //         res.json(err)
// //     })
// // })


// // // DELETE - Delete
// // // router.delete('/:id', (req, res) => {
// // //     const petId = req.params.id

// // //     Fruit.findByIdAndRemove(petId)
// // //         .then(pet => {
// // //             res.redirect('/pet')
// // //         })
// // //         .catch(err => {
// // //             res.json(err)
// // //         })
// // // })

// // // GET route for displaying an update form
// // // router.get('/:id/edit', (req, res) => {
// // //     const petId = req.params.id

// // //     pet.findById(petId)
// // //         .then(pet => {
// // //             res.render('pets/edit', { pet })
// // //         })
// // //         .catch(err => {
// // //             res.json(err)
// // //         })
// // // })

// // // // PUT - Update
// // // // localhost:3000/fruits/:id
// // // router.put('/:id', (req, res) => {
// // //     const petId = req.params.id

// // //     req.body.sex = req.body.sex === 'on' ? true : false

// // //     Pet.findByIdAndUpdate(petId, req.body, { new: true })
// // //         .then(pet => {
// // //             res.redirect(`/pets/${pet._id}`)
// // //         })
// // //         .catch(err => {
// // //             res.json(err)
// // //         })
// // // })

// // // // GET route for displaying my form for create
router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('pets/new', { username, loggedIn })
})

// POST - Create
router.post('/index', (req, res) => {

    // now that we have user specific fruits, we'll add a username upon creation
    // remember, when we login, we saved the username to the session object
    // using the ._id to set the owner field
    
    req.body.owner = req.session.userId

    console.log(req.body)
    Pet.create(req.body)
        .then(pet => {
            console.log(pet)
            // res.json(fruit)
            res.redirect('/adopt-a-paw/pets/index')
        })
        .catch(err => {
            res.json(err)
        })
})

// GET - Index
// localhost:3000/fruits
router.get('/index', (req, res) => {
        // mongoose to find all fruits
        Pet.find({})
        // return fruits as json
        .then(pets => {
           // res.json(fruit)
        res.render('pets/index', { pets })
        })
        .catch(err => {
            res.json(err)
        })
})

// // // router.get('/mine', (req, res) => {
// // //     // find the fruits associated with the logged in user
// // //     Pet.find({ owner: req.session.userId })
// // //         .then(pets => {
// // //             res.render('pets/index', { pets })
// // //         })
// // //         .catch(error => {
// // //             console.log(error)
// // //             res.json({ error })
// // //         })
// // // })



// // // // GET - Show
// // // // localhost:3000/fruits/:id <- change with the id being passed in
// // // router.get('/:id', (req, res) => {
// // //     const petId = req.params.id

// // //     Pet.findById(petId)
// // //     // populate our User models fields
// // //     // comment has an author field and that is the ref to the User model
// // //     // always going to be a string of the value you want to populate
// // //     // this also has to be anohter model 
// // //         .populate('comments.author')
// // //         // send back some json
// // //         .then(pet => {
// // //             // res.json(fruit)
// // //             const userId = req.session.userId
// // //             const username = req.session.username
// // //             res.render('pets/show', { pet, userId, username })
// // //         })
// // //         .catch(err => {
// // //             res.json(err)
// // //         })
// // // })

module.exports = router