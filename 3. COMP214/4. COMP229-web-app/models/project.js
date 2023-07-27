let mongoose = require('mongoose');

//Create Model of Project
let projectModel = mongoose.Schema(
    {
        "title" : String,
        "description" : String,
        "deadline" : Date
    },
    {
        collection: "project"
    }
);

module.exports = mongoose.model('Project', projectModel);