let mongoose = require('mongoose');

//Create Model of Product
let productModel = mongoose.Schema(
    {
        "name" : String,
        "company" : String,
        "price" : Number
    },
    {
        collection: "product"
    }
);

module.exports = mongoose.model('Product', productModel);