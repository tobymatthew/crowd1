module.exports = (req, res) => {
    
    res.render('signup', {
        errors: req.flash('registrationErrors'),
        data: req.flash('data')[0]
    })
 }