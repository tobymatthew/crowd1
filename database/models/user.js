const mongoose = require('mongoose');
const schema = mongoose.Schema



const UserSchema = new schema({
    firstname: {
        type: String,
        required: [true, 'Please provide your firstname!']
    },
    lastname: {
        type: String,
        required: [true, 'Please provide your lastname!']
    },
    sponsor: {
        type: String,
        required: [true, 'Please provide your sponsor!']
    },
    address: {
        type: String,
        required: [true, 'Please provide your address!']
    },
    city: {
        type: String,
        required: [true, 'Please provide your city!']
    },
    zip: {
        type: String,
        required: [true, 'Please provide your zip!']
    },
    countrycode: {
        type: String,
        required: [true, 'Please provide your countrycode!']
    },
    username: {
        type: String,
        required: [true, 'Please provide your username!'],
        unique: true
    },
    email: {
        type: String,
        required: [true,  'Please provide your email!'],
        unique: true

    },
    password: {
        type: String,
        required: [true, 'Please provide your password!']
    },
}, {timestamps: true})



const User = mongoose.model('User', UserSchema);
module.exports = User