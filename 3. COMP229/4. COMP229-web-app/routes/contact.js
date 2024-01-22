const { response } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Contact = require('../models/contact');

//To open send message page
router.get('/send', (request, response, next) => {
    response.render('contact/send', { title: 'Contact Me' })
});

router.post('/send', (request, response, next) => {
    //Getting data from form
    let newContact = Contact({
        "contactName": request.body.contactName,
        "contactEmail": request.body.contactEmail,
        "contactNumber": request.body.contactNumber,
        "contactMessage": request.body.contactMessage
    })

    //Insert data into MongoDB
    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else {
            response.redirect('/home');
        }
    })
});

module.exports = router;