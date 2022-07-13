const express = require('express')
const User = require('../models/user')
// bcrypt is used to hash(read: encrypt) passwords
const bcrypt = require('bcryptjs')
const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('users/signup')
})

// one POST to make the db request
router.post('/signup', async (req, res) => {
    console.log('this is our initial request body', req.body)
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )
    // now that our password is hashed, we can create a user
    console.log('this is request boday after hashing', req.body)
    User.create(req.body)
    // if created successfully, we'll redirect to the login page
    .then(user => {
        console.log('this is the new user', user)
        res.redirect('/users/login')
    })
    // if creation was unsuccessful, send the error
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

router.get('/login', (req, res) => {
    res.render('users/login')
})

router.post('/login', async (req, res) => {
    const { username, password } =req.body
    console.log('this is the session', req.session)
    User.findOne({ username })
        // we check if the user exists
        .then(async (user) => { // this is where we find ._id

        
        // if they do, we'll compare the passwords and make sure it's correct
        if (user) {
            // compare the pw
            // bcrypt.compare evaluates to a truthy or falsy value
            const result = await bcrypt.compare(password, user.password)

            if (result) {
                // if the compare comes back truthy we store user properties in session
                // if the pw is correct, we'll use the newly created session object
                req.session.username = username
                req.session.loggedIN = true
                // adding new field
                req.session.userId = user._id
                //redirect to the '/fruits' page
                console.log('this is the session after login', req.session)
                res.redirect('/fruits')
            } else {
                // for now just send some json error
                res.json({ error: 'username or password incorrect'})
            }
            
        } else {
            // send error if user doesn't exist
            res.json({error: 'user does not exist'})
        }
        
    
    // otherwise, send an error message
})
    // if they don't we'll redirect to sign up page
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

router.get('/logout', (req, res) => {
    // destroy the session and redirect to the main page
    console.log('this is rutrned from req.session.destroy', ret)
    console.log('session has been destroyed')
    console.log(req.session)
    res.redirect('/adopt-a-paw')

})

module.exports = router