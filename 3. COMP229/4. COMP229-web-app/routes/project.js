const { response } = require('express');
const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to model
let Project = require('../models/project');

//Manage routes
router.get('/', (request, response, next) => {
    Project.find((err, projectList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log(projectList);
            response.render('project/list', { title: 'Project Info', ProjectList: projectList });
        }
    });
});

//To open add project page
router.get('/add', (request, response, next) => {
    response.render('project/add', { title: 'Add Project' })
});

router.post('/add', (request, response, next) => {
    //Getting data from form
    let newProject = Project({
        "title": request.body.title,
        "description": request.body.description,
        "deadline": request.body.deadline
    })

    //Insert data into MongoDB
    Project.create(newProject, (err, Project) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else {
            response.redirect('/projects');
        }
    })
});

//Retrieve data from MongoDB and open it in view (FORM)
router.get('/update/:id', (request, response, next) => {

    let id = request.params.id;
    
    Project.findById(id, (err, projectToUpdate) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else{
            response.render('project/update', {title: 'Update Project', project: projectToUpdate});
        }
    })
});

//Write code to store updated data into MongoDB
router.post('/update/:id', (request, response, next) => {
    let id = request.params.id;

    let updateProject = Project({
        "_id": id,
        "title": request.body.title,
        "description": request.body.description,
        "deadline": request.body.deadline
    });

    Project.updateOne({_id: id}, updateProject, (err) => {
        if (err){
            console.log(err);
            response.end(err);
        }
        else{
            response.redirect('/home')
        }
    });
});


router.get('/delete/:id', (request, response, next) => {

    let id = request.params.id;
    
    Project.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            response.end(err);
        }
        else{
            response.redirect('/projects')
        }
    });
});

module.exports = router;