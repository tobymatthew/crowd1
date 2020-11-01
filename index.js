const express = require('express');
const path = require('path');
const { engine } = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session')



const homePageController = require('./controllers/homePage')
const aboutPageController = require('./controllers/about')
const signupController = require('./controllers/signup')
const loginController = require('./controllers/login')
const forgotpasswordController = require('./controllers/forgotpassword')
const termsController = require('./controllers/terms');
const netmarketingController = require('./controllers/netmarketing');
const crowdmarketingController = require('./controllers/crowdmarketing');
const privacyController = require('./controllers/privacy')
const faqController = require('./controllers/faq')
const storeUserController = require('./controllers/storeUser');
const loginUserController = require('./controllers/loginUser')
const dashboardController = require('./controllers/dashboard')
const logoutController = require('./controllers/logout')

const app = new express();

app.use(expressSession({
    secret: 'secret'
}))

mongoose.connect('mongodb://localhost/crowd1', {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})

app.use(express.static('public'));
app.use(engine);

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true }))

app.get('/', homePageController)
app.get('/about', aboutPageController)
app.get('/signup', signupController)
app.get('/login', loginController)
app.get('/forgotpassword', forgotpasswordController)
app.get('/terms', termsController)
app.get('/privacy', privacyController)
app.get('/frequently-asked-questions', faqController)
app.get('/introduction-to-network-marketing', netmarketingController)
app.get('/introduction-to-crowd-marketing', crowdmarketingController)
app.post('/user/signup', storeUserController)
app.post('/user/login', loginUserController)
app.get('/user/dashboard', dashboardController)
app.get('/logout', logoutController)


app.listen(4000, () => {
    console.log('App listening on port 4000')
} )