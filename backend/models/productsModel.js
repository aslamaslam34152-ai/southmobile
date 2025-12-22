const mongoose = require('mongoose');

const productSchema =new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    ratings:Number,
    images:[{type:Object}],
    category:String,
    seller:String,
    stock:{type:Number, required:true},
});

module.exports = mongoose.model('products',productSchema);