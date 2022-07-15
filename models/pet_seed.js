
// const mongoose = require('./connection')
// const Pet = require('./pet')

// ///////////////////////////////////////
// // Seed Code
// ///////////////////////////////////////
// // save my db connection to a variable for easy reference later
// const db = mongoose.connection

// // this runs the callback function when the db connection is opened from this file
// db.on('open', () => {
//     // array of starter fruits
//     const startPets = [
//         {
//         title: "Friendly German Shepherd puppy",
//         cost: "$100",
//         name: 'Jacob',
//         primary_breed: 'German Shepherd',
//         secondary_breed: 'unknown',
//         sex: true, //true for male
//         age: 'puppy',
//         color: 'brown and black',
//         size: 'small',
//         location: 'Atlanta, GA',
//         name_of_owner: 'Henry',
//         contact_info: 'henry1@gmail.com 404 555-5555'
//     }, {
//         title: "Labador needing new home",
//         cost: "$150",
//         name: 'Sugar',
//         primary_breed: 'Labador retriever',
//         sex: false, //true for male, false for female
//         age: '3 y/o',
//         color: 'brown',
//         size: 'large',
//         other_descriptions: 'energetic, good with children and other pets',
//         location: 'Miami, FL',
//         name_of_owner: 'Maria',
//         contact_info: 'maria2@gmail.com 123 555-5555',
//         images: ''
//     }, {
//         title: "Puppies! Puppies! Puppies!",
//         cost: "$200",
//         name: 'N/A',
//         primary_breed: 'Boston terrier',
//         secondary_breed: 'Chihuahua',
//         sex: true, //true for male
//         age: 'puppy',
//         color: 'black and white',
//         size: 'small',
//         location: 'LA, CA',
//         name_of_owner: 'Jackson',
//         contact_info: 'jackson3@gmail.com 345 555-5555',
//         images: ''
//     }, {
//         title: "mature cat needing a home",
//         cost: "$25",
//         name: 'Evee',
//         primary_breed: 'American shorthair',
//         secondary_breed: 'none',
//         sex: false, //true for male
//         age: '5 years old',
//         color: 'grey and black',
//         size: 'medium',
//         other_descriptions: 'has one eye, cannot climb stairs, house trained, spayed, and vaccinations up to date',
//         location: 'Seattle, WA',
//         name_of_owner: 'Tammy',
//         contact_info: 'tammy4@gmail.com 901 555-5555'
//     }, {
//         title: "FREE KITTENS!!!",
//         cost: "$0",
//         name: 'None',
//         primary_breed: 'tabby',
//         secondary_breed: 'unknown',
//         sex: true, //true for male
//         age: '1 month',
//         color: 'orange',
//         size: 'small',
//         location: 'Houston, TX',
//         name_of_owner: 'Tiffany',
//         contact_info: 'tiffany5@gmail.com 772 555-5555'
//     }, {
//         title: "Bearded dragon",
//         cost: "$120",
//         name: 'Hank',
//         primary_breed: 'Bearded Dragon',
//         sex: true, //true for male
//         age: '2 years old',
//         color: 'yellow and green',
//         size: 'small',
//         other_descriptions: 'comes with 40-gal tank, heat lamp, and feeder and water bowls', 
//         location: 'Athens, GA',
//         name_of_owner: 'Jeff',
//         contact_info: 'Jeff6@gmail.com 678 555-5555'
//     }, {
//         title: "lovable pug looking for a welcoming family",
//         cost: "$200",
//         name: 'Dallas',
//         primary_breed: 'pug',
//         sex: false, //true for male
//         age: '5 y.o',
//         color: 'tan and black',
//         size: 'small',
//         location: 'Las Vegas, NV',
//         name_of_owner: 'Jeremy',
//         contact_info: 'Jeremy7@gmail.com'
//     }, {
//         title: "Beautiful pit bull terrier",
//         cost: "$199",
//         name: 'Bonnie',
//         primary_breed: 'pit bull terrier mix',
//         sex: false, //true for male
//         age: '3 y.o',
//         color: 'white and tan',
//         size: 'large',
//         other_descriptions: 'vaccinated, spayed, not cat friendly',
//         location: 'Boston, MA',
//         name_of_owner: 'Sammy',
//         contact_info: 'sammy8@gmail.com 123 456-7890'
//     }, {
//         title: "Easy to care for tabby",
//         cost: "$99",
//         name: 'Milo',
//         primary_breed: 'tabby',
//         sex: true, //true for male
//         age: '1 y.o',
//         color: 'grey and green',
//         size: 'small',
//         other_descriptions: 'vaccinated, neutered, likes children',
//         location: 'Chicago, IL',
//         name_of_owner: 'David',
//         contact_info: 'David9@gmail.com 555 555-5555'
//     }, {
//         title: "Piper the Parakeet",
//         cost: "$30",
//         name: 'Piper',
//         primary_breed: 'parakeet',
//         sex: true, //true for male
//         age: '1.5 y.o',
//         color: 'blue, grey, and white',
//         size: 'small',
//         other_descriptions: 'smart, can talk',
//         location: 'Salt Lake City, UT',
//         name_of_owner: 'Jackie',
//         contact_info: 'jackie0@gmail.com'
//     },  
//     ]

//     // when we seed data, we usually clear out the db first
//     Pet.remove({})
//     // then we create that data
//         .then(deletedPets => {
//             console.log('this is what remove returns', deletedPets)

//             // now that our delete was successful, we can create our fruits
//             Pet.create(startPets)
//                 .then(data => {
//                     console.log('the new pets', data)
//                     db.close()
//                 })
//                 .catch(error => {
//                     console.log('error:', error)
//                     db.close()
//                 })
//         })
//         .catch(error => {
//             console.log('error:', error)
//             db.close()
//         })
//     // whether it's successful or not, we want to close our db connection
// })