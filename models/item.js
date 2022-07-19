const mongoose = require('./connection')
const { Schema, model } = mongoose

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    item_description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
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
        type: String,
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


const Item = model('Item', itemSchema)

module.exports = Item