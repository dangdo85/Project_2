const axios = require("axios");
const { response } = require("express");

const express = require("express");

// importing pet model to access database
const Pet = require("../models/pet");

const { getNewToken, getToken } = require("../models/petsAPI_config");
const { getPet } = require("../controllers/petfinder_controller");

// making a router
const router = express.Router();

// DELETE - Delete
router.delete("/:id", (req, res) => {
  const petId = req.params.id;
  const loggedIn = req.session.loggedIn;
  // console.log('petId', petId)
  if (req.session.loggedIn) {
    Pet.findByIdAndRemove(petId)
      .then((pet) => {
        res.redirect("/users/my_account");
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.redirect("/users.login");
  }
});

// GET route for displaying an update form
router.get("/:id/edit", (req, res) => {
  const petId = req.params.id;
  const loggedIn = req.session.loggedIn;
  if (req.session.loggedIn) {
    Pet.findById(petId)
      .then((pet) => {
        res.render("pets/edit", { pet });
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.redirect("/users/login");
  }
});

// PUT - Update
// localhost:3000/adopt-a-paw/pets/:id
router.put("/:id", (req, res) => {
  const petId = req.params.id;

  Pet.findByIdAndUpdate(petId, req.body, { new: true })
    .then((pet) => {
      res.redirect("/users/my_account");
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route for displaying my form for create
router.get("/new", (req, res) => {
  const username = req.session.username;
  const loggedIn = req.session.loggedIn;
  if (req.session.loggedIn) {
    res.render("pets/new", { username, loggedIn });
  } else {
    res.redirect("/users/login");
  }
});

// POST - Create
router.post("/index", (req, res) => {
  // now that we have user specific pets, we'll add a username upon creation
  // remember, when we login, we saved the username to the session object
  // using the ._id to set the owner field
  const loggedIn = req.session.loggedIn;
  req.body.owner = req.session.userId;
  if (req.session.loggedIn) {
    console.log(req.body);
    Pet.create(req.body)
      .then((pet) => {
        console.log(pet);
        res.redirect("/users/my_account");
      })
      .catch((err) => {
        res.json(err);
      });
  } else {
    res.redirect("/users/login");
  }
});

// GET - Index
// localhost:3000/adopt-a-paw/pets/index
router.get("/index", async (req, res) => {
  const loggedIn = req.session.loggedIn;
  const username = req.session.username;

  // getToken().then((token) => {
  //   axios({
  //       // update for search capability
  // 	url: 'https://api.petfinder.com/v2' + '/animals?type=dog',
  // 	method: 'GET',
  // 	headers: {
  //         Authorization: `Bearer ${token}`,
  // 	},
  // })
  // .then(({data}) => res.json(data))
  // .catch((error) => console.log(error))
  // });
  // have to run twice to see console.log of bearerToken
  // console.log("this is our getToken", getToken());

  // mongoose to find all pets
  // Pet.find({}).sort({updatedAt:'descending'})
  // // return pets as json
  // .then(pets => {
  const pets = await getPet();
  // res.send(pets)
  res.render("pets/index", { pets, loggedIn, username });
  // })
  // .catch(err => {
  //     res.json(err)
  // })
});

// my_account route is in user_routes

// GET - Show
// localhost:3000/adopt-a-paw/items/:id <- change with the id being passed in
router.get("/:id", (req, res) => {
  const petId = req.params.id;
  const loggedIn = req.session.loggedIn;
  // console.log('petId', petId)
  // console.log('param', req.params.id)
  Pet.findById(petId)
    // populate our User models fields
    // comment has an author field and that is the ref to the User model
    // always going to be a string of the value you want to populate
    // this also has to be anohter model
    // send back some json
    .then((pet) => {
      const userId = req.session.userId;
      const username = req.session.username;
      res.render("pets/show", { pet, userId, username, loggedIn });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
