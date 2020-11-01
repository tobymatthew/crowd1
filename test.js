const mongoose = require('mongoose')
const User = require('./database/models/user')

mongoose.connect('mongodb://localhost/node-js-blog', {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})

User.create({
    firstname: 'James',
    lastname: 'Smith',
    sponsor: 'rene',
    address: 'Kalkere',
    city: 'bangalore',
    zip: 987323,
    countrycode: 'IN',
    username: 'jamessmith',
    email: 'jamessmith@test.com',
    password: 'james'
    
}, (error, user) => {
    console.log(error, user)
})