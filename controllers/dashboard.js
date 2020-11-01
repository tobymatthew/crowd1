if(req.session.userId)
    {
       return res.render('dashboard')
    }
    res.redirect('/login')
   