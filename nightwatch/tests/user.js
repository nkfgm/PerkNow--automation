const functions = require('../testSupport/functions')
const selectors = require('../testSupport/selectors')
const data = require('../testSupport/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:8080/#/login')
        .clearValue(selectors.User.loginScreen.emailField)  
        .clearValue(selectors.User.loginScreen.passwordField)
    },
    after: browser => {
        browser.end()
    },
// This test is testing that a new user can set up an account using a work email
// After all required information has been inputed I set up the test to reload the login page and login with the newly created account

    'Create an Account with email' : browser => {
        browser
        .waitForElementVisible(selectors.User.loginScreen.createAccount, 1000)
        .click(selectors.User.loginScreen.createAccount)
        .pause(1000)
        .clickByText(selectors.User.createAccountScreen.yesButton.tag, selectors.User.createAccountScreen.yesButton.text)
        .pause(100)
        .waitForElementVisible(selectors.User.createAccountScreen.workEmailScreen.email, 1000)
        .setValue(selectors.User.createAccountScreen.workEmailScreen.email, data.User.email.workEmail)
        .pause(100)
        .click(selectors.User.createAccountScreen.workEmailScreen.nextButton)
        .waitForElementVisible(selectors.User.createAccountScreen.nameScreen.firstNameLine, 1000)
        .setValue(selectors.User.createAccountScreen.nameScreen.firstNameLine, data.User.nameScreen.firstName)
        .setValue(selectors.User.createAccountScreen.nameScreen.lastNameLine, data.User.nameScreen.lastName)
        .setValue(selectors.User.createAccountScreen.nameScreen.passwordLine, data.User.nameScreen.password)
        .pause(100)
        .click(selectors.User.createAccountScreen.nameScreen.showPassword)
        .click(selectors.User.createAccountScreen.nameScreen.nextButton)
        .pause(100)
        .setValue(selectors.User.createAccountScreen.zipCodeScreen.zipCode, data.User.zipCodeScreen.zipCode)
        .click(selectors.User.createAccountScreen.zipCodeScreen.getPerks)
        .pause(2000)
        .url('http://localhost:8080/#/login')
        .pause(1000)
        .setValue(selectors.User.loginScreen.emailField, data.User.loginScreen.email)
        .setValue(selectors.User.loginScreen.passwordField, data.User.loginScreen.password)
        .click(selectors.User.loginScreen.signInButton)
        .waitForElementVisible(selectors.User.dealsPage.funDeals, 3000)
        .end()
    },

// This is testing that a user can set up a new account using a work code 

    'User-Create an account using code': browser => {
        browser
        .waitForElementVisible(selectors.User.loginScreen.createAccount, 1000)
        .click(selectors.User.loginScreen.createAccount)
        .pause(1000)
        .clickByText(selectors.User.createAccountScreen.codeButton.tag, selectors.User.createAccountScreen.codeButton.text)
        .pause(2000)
        .setValue(selectors.User.createAccountScreen.codeEntry.code1, data.User.codeAccount.code1)
        .setValue(selectors.User.createAccountScreen.codeEntry.code2, data.User.codeAccount.code2)
        .setValue(selectors.User.createAccountScreen.codeEntry.code3, data.User.codeAccount.code3)
        .setValue(selectors.User.createAccountScreen.codeEntry.code4, data.User.codeAccount.code4)
        .setValue(selectors.User.createAccountScreen.codeEntry.personalEmail, data.User.codeAccount.email)
        .click(selectors.User.createAccountScreen.codeEntry.nextButton)
        .pause(100)
        .setValue(selectors.User.createAccountScreen.nameScreen.firstNameLine, data.User.nameScreen.firstName)
        .setValue(selectors.User.createAccountScreen.nameScreen.lastNameLine, data.User.nameScreen.lastName)
        .setValue(selectors.User.createAccountScreen.nameScreen.passwordLine, data.User.nameScreen.password)
        .pause(3000)
        .click(selectors.User.createAccountScreen.nameScreen.nextButton)
        .pause(100)
        .setValue(selectors.User.createAccountScreen.zipCodeScreen.zipCode, data.User.zipCodeScreen.zipCode)
        .pause(2000)
        .click(selectors.User.createAccountScreen.zipCodeScreen.getPerks)
        .pause(2000)
        .url('http://localhost:8080/#/login')
        .pause(1000)
        .end()
    },
    
    // This is a test showing that you must have a work email to login

    'User-Login with new account' : browser => {
        browser  
        .setValue(selectors.User.loginScreen.emailField, data.User.loginScreen.email)
        .setValue(selectors.User.loginScreen.passwordField, data.User.loginScreen.password)
        .click(selectors.User.loginScreen.signInButton)
        .waitForElementVisible(selectors.User.dealsPage.serviceDeals, 1000)
        .pause(1000)
        .end()
    },

// This is just an individual test for showing that the newly create account can be used to login 

    'User-Attempt to login with invalid email' : browser => {
        browser  
        .setValue(selectors.User.loginScreen.emailField, data.User.loginInvalid.email)
        .setValue(selectors.User.loginScreen.passwordField, data.User.loginInvalid.password)
        .click(selectors.User.loginScreen.signInButton)
        .pause(1000)
        .acceptAlert()
        .waitForElementVisible(selectors.User.loginScreen.signInButton, 1000)
        .pause(1000)
        .end()
    }, 

// This is testing that a user can view all available deals
// Every deal category (including the featured deal) is shown as visible 
// Every Category is clicked on and the list of deals is shown

    'User-Login and view deals(including featured deal(s))' : browser => {
        functions.signIn(browser)
        browser
        .waitForElementVisible(selectors.User.dealsPage.featuredDeals, 3000)
        .waitForElementVisible(selectors.User.dealsPage.serviceDeals, 2000)
        .waitForElementVisible(selectors.User.dealsPage.foodDeals, 2000)
        .waitForElementVisible(selectors.User.dealsPage.conciergeDeals, 2000)
        .waitForElementVisible(selectors.User.dealsPage.funDeals, 2000)
        .click(selectors.User.dealsPage.serviceDeals)
        .waitForElementVisible(selectors.User.serviceDeals.dealsList, 2000)
        .click(selectors.User.menuBar.backButton)
        .waitForElementVisible(selectors.User.dealsPage.foodDeals, 2000)
        .click(selectors.User.dealsPage.foodDeals)
        .waitForElementVisible(selectors.User.foodDeals.dealsList, 2000)
        .click(selectors.User.menuBar.backButton)
        .waitForElementVisible(selectors.User.dealsPage.conciergeDeals, 2000)
        .click(selectors.User.dealsPage.conciergeDeals)
        .waitForElementVisible(selectors.User.conciergeDeals.dealsList, 2000)
        .click(selectors.User.menuBar.backButton)
        .waitForElementVisible(selectors.User.dealsPage.funDeals, 2000)
        .click(selectors.User.dealsPage.funDeals)
        .waitForElementVisible(selectors.User.funDeals.dealsList, 2000)
        .click(selectors.User.menuBar.backButton)
        .pause(2000)
    },

// This is testing that a user can redeem a deal
// This test asserts that on the selected deal all vendor info is correct and present (Location, Hours, Website, and Phone number)
// This also testst that the specific deal information is correct and present after redeem is clicked
// The deal is redeemed and then returns to the user homepage 
    
    'User-Select and redeem deal' : browser => {
       functions.signIn(browser)
       browser
        .waitForElementVisible(selectors.User.dealsPage.funDeals, 2000)
        .click(selectors.User.dealsPage.funDeals)
        .pause(1000)
        .clickByText(selectors.User.funDeals.fun1Deal.tag, selectors.User.funDeals.fun1Deal.text)
        .waitForElementVisible(selectors.User.funDeals.dealInfo, 3000)
        .assert.containsText(selectors.User.dealRedeem.dealInfo.location, data.User.funDeal1.location)
        .assert.containsText(selectors.User.dealRedeem.dealInfo.location, data.User.funDeal1.locationLine2)
        .assert.attributeContains(selectors.User.dealRedeem.dealInfo.location, 'href', data.User.funDeal1.locationLink)
        .assert.containsText(selectors.User.dealRedeem.dealInfo.hours, data.User.funDeal1.hours1)
        .assert.containsText(selectors.User.dealRedeem.dealInfo.hours, data.User.funDeal1.hours2)
        .assert.containsText(selectors.User.dealRedeem.dealInfo.hours, data.User.funDeal1.hours3)        
        .assert.attributeContains(selectors.User.dealRedeem.dealInfo.website, 'href', data.User.funDeal1.website)
        .assert.attributeContains(selectors.User.dealRedeem.dealInfo.phone, 'href', data.User.funDeal1.phone)
        .clickByText(selectors.User.funDeals.gameboyDeal.tag, selectors.User.funDeals.gameboyDeal.text)
        .waitForElementVisible(selectors.User.dealRedeem.dealRedeemBox, 2000)
        .assert.containsText(selectors.User.funDeals.gameboyDealDescription, data.User.funDeal1.dealDescription)
        .clickByText(selectors.User.dealRedeem.redeemButton.tag, selectors.User.dealRedeem.redeemButton.text)
        .waitForElementVisible(selectors.User.dealRedeem.redeemedButton, 5000)
        .click(selectors.User.dealRedeem.redeemedButton)
        .waitForElementVisible(selectors.User.funDeals.dealInfo, 3000)
        .clickByText(selectors.User.dealRedeem.backButton.tag, selectors.User.dealRedeem.backButton.text)
        .waitForElementVisible(selectors.User.funDeals.dealsList, 2000)
        .clickByText(selectors.User.dealRedeem.backButton.tag, selectors.User.dealRedeem.backButton.text)
        .waitForElementVisible(selectors.User.dealsPage.dealsHome, 2000)
        .pause(1000)
    },
    
    
    
    
    
    
    // All of theses tests are testing the Menu button and items revealed by clicking the menu button 
    // Automation tests for the Menu button will not yet work because of problems with selectors 
    
    // 'Request a Perk' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.requestPerk, 1000)
    //     .assert.attributeContains(selectors.User.menuBar.requestPerk, 'href', 'PerkNowinfo@gmail.com?')
    // },
    // 'Refer a vendor' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.referVendor, 1000)
    //     .assert.attributeContains(selectors.User.menuBar.requestPerk, 'href', 'PerkNowinfo@gmail.com?')
    // },
    // 'Contact Support' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.contactSupport, 1000)
    //     .assert.attributeContains(selectors.User.menuBar.contactSupport, 'href', 'PerkNowinfo@gmail.com?')
    // },
    // 'Privacy Policy' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.privacyPolicy, 1000)
    //     .clickByText(selectors.User.menuBar.privacyPolicy.tag, selectors.User.menuBar.privacyPolicy.text)
    //     .waitForElementVisible(selectors.User.menuBar.privacyPolicy.policy)
    // },
    // 'Terms and Conditions of Use' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.termsConditions, 1000)
    //     .clickByText(selectors.User.menuBar.termsConditions.tag, selectors.User.menuBar.termsConditions.text)
    //     .waitForElementVisible(selectors.User.menuBar.termsConditions.terms)
    // },
    // 'Logout' : browser => {
    //     functions.signIn(browser)
    //     browser
    //     .waitForElementVisible(selectors.User.menuBar.menuButton, 2000)
    //     .click(selectors.User.menuBar.menuButton)
    //     .pause(2000)
    //     .waitForElementVisible(selectors.User.menuBar.logout, 1000)
    //     .clickByText(selectors.User.menuBar.logout.tag, selectors.User.menuBar.logout.text)
    //     .waitForElementVisible(selectors.User.loginScreen.emailField)
    // }
    

}