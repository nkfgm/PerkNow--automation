const selectors = require('./selectors.js')
const data = require('./data.js')


const signIn = (browser) => {
    browser  
    .setValue(selectors.User.loginScreen.emailField, data.Admin.loginScreen.email)
    .setValue(selectors.User.loginScreen.passwordField, data.Admin.loginScreen.password)
    .click(selectors.User.loginScreen.signInButton)
    .pause(1000)
}



module.exports = {
    signIn: signIn

}