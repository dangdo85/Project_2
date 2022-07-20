
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
        contact_info: 'henry1@gmail.com 404 555-5555',
        images: 'https://www.thesprucepets.com/thmb/xW2bJFNX8WaZ02g-HHM83jD8ukA=/420x0/filters:no_upscale():max_bytes(150000):strip_icc()/16_Love-5bb4c12bc9e77c00263933b3.jpg'
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
        images: 'https://chocolatelabradorretriever.ca/wp-content/uploads/2022/03/adult-lab-retrievers-1024x628.webp'
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
        images: 'https://images1.americanlisted.com/nlarge/boston_terrier_mix_puppies_bo-chi_40785453.jpg'
    }, {
        title: "mature cat needing a home",
        cost: "$25",
        name: 'Evee',
        species: 'cat',
        breed: 'American shorthair',
        sex: 'female',
        age: '8 years old',
        color: 'grey and black',
        size: 'medium',
        other_descriptions: 'has one eye, cannot climb stairs, house trained, spayed, and vaccinations up to date',
        location: 'Seattle, WA',
        name_of_contact: 'Tammy',
        contact_info: 'tammy4@gmail.com 901 555-5555',
        images: 'https://mybritishshorthair.com/wp-content/uploads/2020/11/American-Shorthair-Weight-by-Age-1.png.webp'
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
        contact_info: 'tiffany5@gmail.com 772 555-5555',
        images: 'https://jerseycats.org/wp-content/uploads/2016/02/kittens-300x239.jpg'
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
        contact_info: 'Jeff6@gmail.com 678 555-5555',
        image:'https://www.morereptiles.com/wp-content/uploads/2021/11/How-Much-Is-A-Bearded-Dragon.png'
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
        contact_info: 'Jeremy7@gmail.com',
        images: "https://pethealthnetwork.com/sites/default/files/styles/large/public/article-image-horiz_102.jpg?itok=HJWJNwoW"
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
        contact_info: 'sammy8@gmail.com 123 456-7890',
        image:'https://cdn-fastly.petguide.com/media/2022/02/16/8209448/american-pitbull-terrier.jpg?size=720x845&nocrop=1'
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
        contact_info: 'David9@gmail.com 555 555-5555',
        image:'https://as2.ftcdn.net/v2/jpg/01/87/09/05/1000_F_187090534_Uf43YSw4fMDi8onTZvQICCUpCtaR6BsR.jpg'
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
        contact_info: 'jackie0@gmail.com',
        image:'https://www.thesprucepets.com/thmb/6HDQlAKbMqwsrOctWcE5XiMKtYM=/4373x3280/smart/filters:no_upscale()/parakeet-budgie-budgerigar-952787256-5b52a7d046e0fb0037bec8a7.jpg'
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