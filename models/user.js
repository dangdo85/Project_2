const mongoose = require('./connection')
const { Schema, model } = mongoose

// make a user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = model('User', userSchema)

module.exports = User