'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const productsSchema = new Schema({
    sku: {
        type: String,
        unique: true,
        trim: true
    },
    name: {
        type: String
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        trim: true
    },
    stock: {
        type: Number,
        trim: true
    },
    available: {
        type: Boolean
    }
});

module.exports = mongoose.model('Products', productsSchema);