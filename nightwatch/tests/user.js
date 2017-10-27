const functions = require('../testSupport/functions')
const selectors = require('../testSupport/selectors')
const data = require('../testSupport/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:8080/#/login')
    },
    after: browser => {
        browser.end()
    },
    'Create an Account' : browser => {
        browser
        .waitForElementVisible(selectors.User.loginScreen.createAccount, 1000)
        .click(selectors.User.loginScreen.createAccount)
        .pause(1000)
        .clickByText(selectors.User.createAccountScreen.yesButton.tag, selectors.User.createAccountScreen.yesButton.text)
        .pause(100)
        .waitForElementVisible(selectors.User.createAccountScreen.workEmailScreen.email, 1000)
        .setValue(selectors.User.createAccountScreen.workEmailScreen.email, data.Email.workEmail)
        .pause(100)
        .click(selectors.User.createAccountScreen.workEmailScreen.nextButton)
        .pause(100)
        .setValue(selectors.User.createAccountScreen.nameScreen.firstNameLine, data.nameScreen.firstName)
        .setValue(selectors.User.createAccountScreen.nameScreen.lastNameLine, data.nameScreen.lastName)
        .setValue(selectors.User.createAccountScreen.nameScreen.passwordLine, data.nameScreen.password)
        .pause(100)
        .click(selectors.User.createAccountScreen.workEmailScreen.nextButton)
        .pause(2000)
    }
    
}