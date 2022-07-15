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
    primary_breed: {
        type: String,
        required: true
    },
    secondary_breed: {
        type: String
    },
    sex: {
        type: Boolean,
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
    name_of_owner: {
        type: String,
        required: true
    },
    contact_info: {
        type: String,
        required: true
    }, 
    images: {
        type: String
    } 
},
    {
        timestamps: true
    }

)


const Pet = model('Pet', petSchema)

module.exports = Pet