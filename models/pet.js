const mongoose = require('./connection')
const { Schema, model } = mongoose

const petSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: String,
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    other_descriptions: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    name_of_contact: {
        type: String,
        required: true
    },
    contact_info: {
        type: String,
        required: true
    }, 
    images: {
        type: String
    }, 
        owner: {
        type: Schema.Types.ObjectId, // a single User ._id
        ref: 'User', // const User = model('User', userSchema) the string of 'User' is how we reference a model
        },
},
    {
        timestamps: true
    }

)


const Pet = model('Pet', petSchema)

module.exports = Pet