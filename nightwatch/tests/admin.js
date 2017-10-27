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
    
    }
