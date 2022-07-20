
const mongoose = require('./connection')
const Item = require('./item')

///////////////////////////////////////
// Seed Code
///////////////////////////////////////
// save my db connection to a variable for easy reference later
const db = mongoose.connection

// this runs the callback function when the db connection is opened from this file
db.on('open', () => {
    // array of starter items
    const startItems = [
        {
        title: "Fish tank starter kit",
        price: "$50",
        item_description:'20 gallon tank with filter, lights, heater, and substrate',
        location: 'Lawrenceville, GA',
        name_of_contact: 'Gabby',
        contact_info: 'gabby1@gmail.com 404 555-1234',
        images: 'https://i5.walmartimages.com/asr/974ec3f5-68b7-4a81-805b-c742fe3621f9_1.986292b634b59dbca46bdd7121851dd0.jpeg',
    }, {
        title: "automatic feeder for dogs or cats",
        price: "$35",
        item_description:'automatic feeder for dogs or cats',
        location: 'Auburn, AL',
        name_of_contact: 'Terry',
        contact_info: 'terry2@gmail.com 123 123-1234',
        images: 'https://cdn.shopify.com/s/files/1/0252/5197/1119/products/petlibro-basic-automatic-pet-feeder-422812.jpg?v=1648227885',
    }, {
        title: "Raised dog bed and other items",
        price: "$100",
        item_description:'large raised dog bed, comfortable and easy to clean',
        location: 'Asheville, NC',
        name_of_contact: 'Jill',
        contact_info: 'Jill3@gmail.com 987 654-3210',
        images: 'https://s3images.coroflot.com/user_files/individual_files/large_661538_wedhi2fqju8m3lrgoyx5nrqjf.jpg',
    }, {
        title: "100 gallon tank with stand ensemble",
        price: "$200",
        item_description:'lightly used 100 gallon tank with brown and black stand ensemble',
        location: 'NYC, NY',
        name_of_contact: 'Ryan',
        contact_info: 'ryan4@gmail.com 111 111-1111',
        images: 'https://secure.img1-cg.wfcdn.com/im/95447235/resize-h350%5Ecompr-r85/5480/54808751/Deirdre+Rectangle+Aquarium+Stand.jpg',
    }, {
        title: "Custom-build doghouse",
        price: "$350+",
        item_description:'made to specification, solid construction, assemble on property, 1 year warrenty',
        location: 'Fairfax, VA',
        name_of_contact: 'Dennis',
        contact_info: 'dennis5@gmail.com 444 444-4444',
        images: 'http://cdn.shopify.com/s/files/1/0100/2101/1513/products/La-Petite-Maison-Custom-Dog-House-Mexican-Hacienda_cc45163f-004b-44bd-a67b-2389ebe25483.jpg?v=1629251121',
    }, {
        title: "large cat tree",
        price: "$90",
        item_description:'brand new out-of-the-box 6ft H, 3ft W, 2.5ft D',
        location: 'Louisville, KY',
        name_of_contact: 'Jasmine',
        contact_info: 'jasmine6@gmail.com 112 358-1321',
        images: 'https://image.chewy.com/is/image/catalog/214392_MAIN._AC_SL600_V1606832494_.jpg',
    }, {
        title: "100 used tennis balls",
        price: "$20",
        item_description:'used tennis balls great for dogs',
        location: 'Clearwater, FL',
        name_of_contact: 'Gary',
        contact_info: 'gary7@gmail.com 321 322-3322',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE6oBHbIUwqjYWYXwpGLiIVbTcW7ODQk2rjv9o8fatXyf_fnnRkHY3-T_fnLsO1gtgCg&usqp=CAU',
    }, {
        title: "automatic ball throwing dog toy",
        price: "$100",
        item_description:'great for pet to use on their own or for owners with problems throwing balls',
        location: 'Sacramento, CA',
        name_of_contact: 'Lexi',
        contact_info: 'Lexi8@gmail.com 878 888-8888',
        images: 'https://image.chewy.com/is/image/catalog/105449_MAIN._AC_SL600_V1617322624_.jpg',
    }, {
        title: "fashionable pet carriers",
        price: "$99+",
        item_description:'Be the talk of your pet owner friends with a fashionable, durable, comfortable, and easy-to-carry home away from home for your small size pet. Lots of options to choose from.',
        location: 'Fresno, CA',
        name_of_contact: 'Betty',
        contact_info: 'betty9@gmail.com 888 555-5555',
        images: 'https://i2.wp.com/howdogcare.com/wp-content/uploads/2017/11/Dog-Purse-For-Small-Dogs.png',
    }, {
        title: "dog walker",
        price: "$30+",
        item_description:'Dog walking service with 5+ years of experience in the Atlanta area. Call for more details',
        location: 'Atlanta, GA',
        name_of_contact: 'Harry',
        contact_info: 'harry0@gmail.com 770 111-0000',
        images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwuAprCum2Ib6T4zIqoqj5HIOOKkJ_v5cXQ&usqp=CAU',
    }, 
    ]

    // when we seed data, we usually clear out the db first
    Item.remove({})
    // then we create that data
        .then(deletedItems => {
            console.log('this is what remove returns', deletedItems)
            Item.create(startItems)
                .then(data => {
                    console.log('the new items', data)
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