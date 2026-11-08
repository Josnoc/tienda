'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const usersSchema = new Schema({
    name: {
        type: String,
        require


    },
    lastname: {
        type: String,


    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,


    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: String,

    },
    image: {
        type: String
    }
});
module.exports = mongoose.model('Users', usersSchema);