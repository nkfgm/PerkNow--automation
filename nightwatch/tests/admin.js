const functions = require('../testSupport/functions')
const selectors = require('../testSupport/selectors')
const data = require('../testSupport/data')

module.exports = {
    beforeEach: browser => {
        browser
        .url('http://localhost:8080/#/login')  
        .clearValue(selectors.User.loginScreen.emailField)  
        .clearValue(selectors.User.loginScreen.passwordField)   
        .setValue(selectors.User.loginScreen.emailField, data.Admin.loginScreen.email)
        .setValue(selectors.User.loginScreen.passwordField, data.Admin.loginScreen.password)
        .click(selectors.User.loginScreen.signInButton)
        .waitForElementVisible(selectors.User.dealsPage.serviceDeals, 3000)
        .url('http://localhost:8080/#/admin/home')        
    },
    after: browser => {
        browser.end()
    },
    // 'Admin can add new deal and view new deal in database' : browser => {
    //     browser
    //     .click(selectors.Admin.homePage.viewDeals)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealsHeader, 1000)
    //     .clickByText(selectors.Admin.viewDeals.newDealButton.tag, selectors.Admin.viewDeals.newDealButton.text)
    //     .waitForElementVisible(selectors.Admin.viewDeals.addDealButton, 1000)
    //     .setValue(selectors.Admin.newDeal.dealName, data.Admin.newDealEntry.dealName)
    //     .setValue(selectors.Admin.newDeal.vendorID, data.Admin.newDealEntry.vendorID)
    //     .setValue(selectors.Admin.newDeal.dealDescription, data.Admin.newDealEntry.dealDescription)
    //     .click(selectors.Admin.newDeal.dropDown)
    //     .click(selectors.Admin.newDeal.featuredSelectors.yes)
    //     .click(selectors.Admin.newDeal.addDealButton)
    //     .pause(1000)
    //     .acceptAlert()
    //     .clickByText(selectors.Admin.newDeal.seeAllDeals.tag, selectors.Admin.newDeal.seeAllDeals.text)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealToEdit, 2000)
    //     // .waitForElementVisible(selectors.Admin.viewDeals.completeDealList, 2000)
    //     .pause(2000)
    // },
    // 'Admin can edit and remove deals' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewDeals, 1000)
    //     .click(selectors.Admin.homePage.viewDeals)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealsHeader, 2000)
    //     // .pause(2000)
    //     .click(selectors.Admin.viewDeals.dealToEdit)
    //     .pause(1000)
    //     .waitForElementVisible(selectors.Admin.dealEdit.descriptionField, 2000)
    //     .waitForElementVisible(selectors.Admin.dealEdit.nameField, 2000)
    //     .clearValue(selectors.Admin.dealEdit.descriptionField)
    //     .pause(1000)
    //     .setValue(selectors.Admin.dealEdit.descriptionField, data.Admin.editDeal.dealDescription)
    //     .clearValue(selectors.Admin.dealEdit.nameField)
    //     .setValue(selectors.Admin.dealEdit.nameField, data.Admin.editDeal.nameField)
    //     .click(selectors.Admin.dealEdit.updateDealButton)
    //     .waitForElementVisible(selectors.Admin.dealEdit.updateDealButton, 1000)
    //     .clickByText(selectors.Admin.dealEdit.backButton.tag, selectors.Admin.dealEdit.backButton.text)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealList, 2000)
    //     .click(selectors.Admin.viewDeals.dealToDelete)
    //     .waitForElementVisible(selectors.Admin.dealEdit.deleteDeal, 1000)
    //     .click(selectors.Admin.dealEdit.deleteDeal)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealList, 1000)
    // },
    // 'Admin can add new vendor' : browser => {
    //     browser
    //     .click(selectors.Admin.homePage.viewVendors)
    //     .waitForElementVisible(selectors.Admin.vendorsList.vendorHeader, 2000)
    //     .clickByText(selectors.Admin.vendorsList.newVendorButton.tag, selectors.Admin.vendorsList.newVendorButton.text)
    //     .waitForElementVisible(selectors.Admin.newVendor.addVendorButton, 2000)
    //     .setValue(selectors.Admin.newVendor.vendorName, data.Admin.newVendorEntry.vendorName)
    //     .setValue(selectors.Admin.newVendor.vendorAddress, data.Admin.newVendorEntry.vendorAddress)
    //     .setValue(selectors.Admin.newVendor.vendorCity, data.Admin.newVendorEntry.vendorCity)
    //     .setValue(selectors.Admin.newVendor.vendorState, data.Admin.newVendorEntry.vendorState)
    //     .setValue(selectors.Admin.newVendor.vendorZip, data.Admin.newVendorEntry.vendorZip)
    //     .setValue(selectors.Admin.newVendor.vendorPhone, data.Admin.newVendorEntry.vendorPhone)
    //     .setValue(selectors.Admin.newVendor.vendorEmail, data.Admin.newVendorEntry.vendorEmail)
    //     .click(selectors.Admin.newVendor.categoryDropDown)
    //     .click(selectors.Admin.newVendor.categoryOptions.service)
    //     .setValue(selectors.Admin.newVendor.pictureURL, data.Admin.newVendorEntry.vendorPic)
    //     .setValue(selectors.Admin.newVendor.bookingURL, data.Admin.newVendorEntry.vendorBooking)
    //     .click(selectors.Admin.newVendor.temporaryDropDown)
    //     .click(selectors.Admin.newVendor.temporaryOptions.yes)
    //     .setValue(selectors.Admin.newVendor.weekdayHours, data.Admin.newVendorEntry.vendorWeekday)
    //     .setValue(selectors.Admin.newVendor.saturdayHours, data.Admin.newVendorEntry.vendorSaturday)
    //     .setValue(selectors.Admin.newVendor.sundayHours, data.Admin.newVendorEntry.vendorSunday)
    //     .click(selectors.Admin.newVendor.companyRestrictions)
    //     //???? 
    //     // .click(selectors.Admin.newVendor.facebookCheckBox)
    //     .click(selectors.Admin.newVendor.addVendorButton)
    //     .pause(2000)
    //     .acceptAlert()
    //     .pause(1000)
    // },
    // 'Admin can edit and remove Vendor' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewVendors, 1000)
    //     .click(selectors.Admin.homePage.viewVendors)
    //     .waitForElementVisible(selectors.Admin.vendorsList.editVendorHeader, 2000)
    //     // .pause(2000)
    //     .clickByText(selectors.Admin.vendorsList.vendorToEdit.tag, selectors.Admin.vendorsList.vendorToEdit.text)
    //     .waitForElementVisible(selectors.Admin.newVendor.vendorPhone, 2000)
    //     .clearValue(selectors.Admin.newVendor.vendorPhone)
    //     .pause(1000)
    //     .setValue(selectors.Admin.newVendor.vendorPhone, data.Admin.vendorEdit.vendorPhoneEdit)
    //     .click(selectors.Admin.editVendor.updateVendorButton)
    //     .waitForElementVisible(selectors.Admin.editVendor.updateVendorButton, 1000)
    //     .clickByText(selectors.Admin.editVendor.backButton.tag, selectors.Admin.editVendor.backButton.text)
    //     .waitForElementVisible(selectors.Admin.vendorsList.vendorHeader, 1000)
    //     .clickByText(selectors.Admin.vendorsList.deleteVendor.tag, selectors.Admin.vendorsList.deleteVendor.text)
    //     .waitForElementVisible(selectors.Admin.editVendor.deleteVendorButton, 1000)
    //     .click(selectors.Admin.editVendor.deleteVendorButton)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealList, 1000)
    // },
    
    // 'Admin can add new Company' : browser => {
    //     browser
    //     .click(selectors.Admin.homePage.viewCompanies)
    //     .pause(1000)
    //     .waitForElementVisible(selectors.Admin.companiesList.companyHeader, 2000)
    //     .clickByText(selectors.Admin.companiesList.newCompanyButton.tag, selectors.Admin.companiesList.newCompanyButton.text)
    //     .waitForElementVisible(selectors.Admin.newCompany.addCompanyButton, 2000)
    //     .setValue(selectors.Admin.newCompany.companyName, data.Admin.newCompanyEntry.companyName)
    //     .setValue(selectors.Admin.newCompany.companyAddress, data.Admin.newCompanyEntry.companyAddress)
    //     .setValue(selectors.Admin.newCompany.companyAddress2, data.Admin.newCompanyEntry.companyAddress2)
    //     .setValue(selectors.Admin.newCompany.companyCity, data.Admin.newCompanyEntry.companyCity)
    //     .setValue(selectors.Admin.newCompany.companyState, data.Admin.newCompanyEntry.companyState)
    //     .setValue(selectors.Admin.newCompany.companyZip, data.Admin.newCompanyEntry.companyZip)
    //     .setValue(selectors.Admin.newCompany.companyDomain, data.Admin.newCompanyEntry.companyDomain)
    //     .setValue(selectors.Admin.newCompany.companyColor, data.Admin.newCompanyEntry.companyColor)
    //     .setValue(selectors.Admin.newCompany.companyLogoUrl, data.Admin.newCompanyEntry.companyLogoUrl)
    //     .setValue(selectors.Admin.newCompany.companyCode, data.Admin.newCompanyEntry.companyCode)
    //     .click(selectors.Admin.newCompany.addCompanyButton)
    //     .pause(3000)
    //     .acceptAlert()
    //     .pause(2000)
        
    // },
    // 'Admin can edit and remove Company' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewCompanies, 1000)
    //     .click(selectors.Admin.homePage.viewCompanies)
    //     .waitForElementVisible(selectors.Admin.companiesList.editCompanyHeader, 2000)
    //     // .pause(2000)
    //     .clickByText(selectors.Admin.companiesList.companyToEdit.tag, selectors.Admin.companiesList.companyToEdit.text)
    //     .waitForElementVisible(selectors.Admin.newCompany.companyName, 2000)
    //     .clearValue(selectors.Admin.newCompany.companyName)
    //     .pause(1000)
    //     .setValue(selectors.Admin.newCompany.companyName, data.Admin.companyEdit.companyNameEdit)
    //     .click(selectors.Admin.editCompany.updateCompanyButton)
    //     .waitForElementVisible(selectors.Admin.editCompany.updateCompanyButton, 1000)
    //     .clickByText(selectors.Admin.editCompany.backButton.tag, selectors.Admin.editCompany.backButton.text)
    //     .waitForElementVisible(selectors.Admin.companiesList.companyHeader, 1000)
    //     .clickByText(selectors.Admin.companiesList.companyToDelete.tag, selectors.Admin.companiesList.companyToDelete.text)
    //     .waitForElementVisible(selectors.Admin.editCompany.deleteCompanyButton, 1000)
    //     .click(selectors.Admin.editCompany.deleteCompanyButton)
    //     .waitForElementVisible(selectors.Admin.companiesList.companyHeader, 1000)
    // },
    // 'Admin can view Transactions' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewTransactions, 1000)
    //     .click(selectors.Admin.homePage.viewTransactions)
    //     .waitForElementVisible(selectors.Admin.viewTransactions.transactionsList, 3000)
    //     .pause(2000)
    // },
    // 'Admin can view Users' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewUsers, 1000)
    //     .click(selectors.Admin.homePage.viewUsers)
    //     .waitForElementVisible(selectors.Admin.viewUsers.usersList, 3000)
    //     .pause(2000)
    // },
    // 'Menu bar- Home' : browser => {
    //     browser
    //     .waitForElementVisible(selectors.Admin.homePage.viewDeals)
    //     .click(selectors.Admin.homePage.viewDeals)
    //     .waitForElementVisible(selectors.Admin.viewDeals.dealList)
    //     .click(selectors.Admin.menuBar.homeButton)
    //     .waitForElementVisible(selectors.Admin.homePage.viewDeals)
    // },
    // 'Menu bar Logout' : browser => {
    //     browser
    //     .click(selectors.Admin.menuBar.logoutButton)
    //     .waitForElementVisible(selectors.User.loginScreen.signInButton)
    // }
    

}
