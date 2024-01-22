const express = require('express');
const mongoose = require('mongoose');
let routes = require('./routes/routes');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.listen(PORT, function check(error){
    if(error){
        console.log('Error while starting the server');
    }
    else{
        console.log('Server is running on Port: ',PORT);
    }
});

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/incident', {useNewUrlParser: true, useUnifiedTopology: true},

function checkMongoDBConnection(error){
    if(error){
        console.log("Error while connecting to MongoDB");
    }
    else{
        console.log("Connected to MongoDB");
    }
}
);

app.use(express.json());
app.use(routes);
app.use(cors({origin: 'http://localhost:4200'}));