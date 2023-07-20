let mongoose = require('mongoose');

//Create Model of Contact
let contactModel = mongoose.Schema(
    {
        "contactName" : String,
        "contactEmail" : String,
        "contactNumber" : String,
        "contactMessage" : String
    },
    {
        collection: "contact"
    }
);

module.exports = mongoose.model('Contact', contactModel);