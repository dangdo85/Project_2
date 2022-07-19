
const mongoose = require('./connection')
const Pet = require('./pet')

///////////////////////////////////////
// Seed Code
///////////////////////////////////////
// save my db connection to a variable for easy reference later
const db = mongoose.connection

// this runs the callback function when the db connection is opened from this file
db.on('open', () => {
    // array of starter pets
    const startPets = [
        {
        title: "Friendly German Shepherd puppy",
        cost: "$100",
        name: 'Jacob',
        species: 'dog',
        breed: 'German Shepherd',
        sex: 'male',
        age: 'puppy',
        color: 'brown and black',
        size: 'small',
        location: 'Atlanta, GA',
        name_of_contact: 'Henry',
        contact_info: 'henry1@gmail.com 404 555-5555'
    }, {
        title: "Labador needing new home",
        cost: "$150",
        name: 'Sugar',
        species: 'dog',
        breed: 'Labador retriever',
        sex: 'female',
        age: '3 y/o',
        color: 'brown',
        size: 'large',
        other_descriptions: 'energetic, good with children and other pets',
        location: 'Miami, FL',
        name_of_contact: 'Maria',
        contact_info: 'maria2@gmail.com 123 555-5555',
        images: ''
    }, {
        title: "Puppies! Puppies! Puppies!",
        cost: "$200",
        name: 'N/A',
        species: 'dog',
        breed: 'Boston terrier/chihuahua mix',
        sex: 'male and female',
        age: 'puppy',
        color: 'black and white',
        size: 'small',
        location: 'LA, CA',
        name_of_contact: 'Jackson',
        contact_info: 'jackson3@gmail.com 345 555-5555',
        images: ''
    }, {
        title: "mature cat needing a home",
        cost: "$25",
        name: 'Evee',
        species: 'cat',
        breed: 'American shorthair',
        sex: 'female',
        age: '5 years old',
        color: 'grey and black',
        size: 'medium',
        other_descriptions: 'has one eye, cannot climb stairs, house trained, spayed, and vaccinations up to date',
        location: 'Seattle, WA',
        name_of_contact: 'Tammy',
        contact_info: 'tammy4@gmail.com 901 555-5555'
    }, {
        title: "FREE KITTENS!!!",
        cost: "$0",
        name: 'None',
        species: 'cat',
        breed: 'tabby',
        sex: 'male and female',
        age: '1 month',
        color: 'orange',
        size: 'small',
        location: 'Houston, TX',
        name_of_contact: 'Tiffany',
        contact_info: 'tiffany5@gmail.com 772 555-5555'
    }, {
        title: "Bearded dragon",
        cost: "$120",
        name: 'Hank',
        species: 'reptile',
        breed: 'Bearded Dragon',
        sex: 'male',
        age: '2 years old',
        color: 'yellow and green',
        size: 'small',
        other_descriptions: 'comes with 40-gal tank, heat lamp, and feeder and water bowls', 
        location: 'Athens, GA',
        name_of_contact: 'Jeff',
        contact_info: 'Jeff6@gmail.com 678 555-5555'
    }, {
        title: "lovable pug looking for a welcoming family",
        cost: "$200",
        name: 'Dallas',
        species: 'dog',
        breed: 'pug',
        sex: 'male',
        age: '5 y.o',
        color: 'tan and black',
        size: 'small',
        location: 'Las Vegas, NV',
        name_of_contact: 'Jeremy',
        contact_info: 'Jeremy7@gmail.com'
    }, {
        title: "Beautiful pit bull terrier",
        cost: "$199",
        name: 'Bonnie',
        species: 'dog',
        breed: 'pit bull terrier mix',
        sex: 'female',
        age: '3 y.o',
        color: 'white and tan',
        size: 'large',
        other_descriptions: 'vaccinated, spayed, not cat friendly',
        location: 'Boston, MA',
        name_of_contact: 'Sammy',
        contact_info: 'sammy8@gmail.com 123 456-7890'
    }, {
        title: "Easy to care for tabby",
        cost: "$99",
        name: 'Milo',
        species: 'cat',
        breed: 'tabby',
        sex: 'male',
        age: '1 y.o',
        color: 'grey and green',
        size: 'small',
        other_descriptions: 'vaccinated, neutered, likes children',
        location: 'Chicago, IL',
        name_of_contact: 'David',
        contact_info: 'David9@gmail.com 555 555-5555'
    }, {
        title: "Piper the Parakeet",
        cost: "$30",
        name: 'Piper',
        species: 'bird',
        breed: 'parakeet',
        sex: 'female',
        age: '1.5 y.o',
        color: 'blue, grey, and white',
        size: 'small',
        other_descriptions: 'smart, can talk',
        location: 'Salt Lake City, UT',
        name_of_contact: 'Jackie',
        contact_info: 'jackie0@gmail.com'
    },  
    ]

    // when we seed data, we usually clear out the db first
    Pet.remove({})
    // then we create that data
        .then(deletedPets => {
            console.log('this is what remove returns', deletedPets)

            Pet.create(startPets)
                .then(data => {
                    console.log('the new pets', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })
    // whether it's successful or not, we want to close our db connection
})