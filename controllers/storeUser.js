const User = require('../database/models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports = (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if (err) {
            console.log(err)
        }

        let user = new User ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            sponsor: req.body.sponsor,
            address: req.body.address,
            city: req.body.city,
            zip: req.body.zip,
            countrycode: req.body.countrycode,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass

        })

        user.save().then(user => {
            console.log('user added successfully')
        }).catch(err => {
            console.log(err)
            res.redirect('/signup')
        })
        
    })

    res.redirect('/')
    
}