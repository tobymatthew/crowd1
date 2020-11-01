const User = require('../database/models/user')
const bcrypt = require('bcryptjs')


module.exports = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username}).then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err,result) {
                if(err) {
                    console.log(err)
                }
                if(result) {
                   console.log('Login Succesful')
                   res.redirect('/user/dashboard')
                }
            })
        }
        else {
            console.log('User not found')
            res.redirect('/login')
        }
        
    })

   
}
    
