let mongoose = require('mongoose');

//Create Model of Product
let employeeModel = mongoose.Schema(
    {
        "name" : String,
        "address" : String,
        "contactnumber" : Number
    },
    {
        collection: "employee"
    }
);

module.exports = mongoose.model('Employee', employeeModel);