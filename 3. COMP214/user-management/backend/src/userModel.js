let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Define collection and schema for User
let userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', userSchema);