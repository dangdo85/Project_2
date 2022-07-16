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
    name_of_owner: {
        type: String,
        required: true
    },
    contact_info: {
        type: String,
        required: true
    },
    images: {
        type: String,
    }
},
    {
        timestamps: true
    }

)


const Item = model('Item', itemSchema)

module.exports = Item