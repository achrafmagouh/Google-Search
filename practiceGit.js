module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
        .waitForElementVisible('body', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .assert .title('Google')
            .click ('gbqfbb')
            .pause (2000)
            .setValue('input[name="q"]', ['husky', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'husky')
            .pause(2000)
            // .click('google search')


    }
}