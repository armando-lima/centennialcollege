const { response } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Employee = require('../models/employee');

//Manage routes
router.get('/', (request, response, next) => {
    Employee.find((err, employeeList) => {
        if (err) {
            return console.error(err);
        } else {
            response.render('employee/list', { title: 'Employee Info', EmployeeList: employeeList });
        }
    });
});

//To open add employee page
router.get('/add', (request, response, next) => {
    response.render('employee/add', { title: 'Add Employee' })
});

router.post('/add', (request, response, next) => {
    //Getting data from form
    let newEmployee = Employee({
        "name": request.body.pname,
        "address": request.body.paddress,
        "contactnumber": request.body.contactnumber
    })

    //Insert data into MongoDB
    Employee.create(newEmployee, (err, Employee) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else {
            response.redirect('/employees');
        }
    })
});

router.get('/delete/:id', (request, response, next) => {

    let id = request.params.id;
    
    Employee.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else{
            response.redirect('/employees')
        }
    });
});

module.exports = router;