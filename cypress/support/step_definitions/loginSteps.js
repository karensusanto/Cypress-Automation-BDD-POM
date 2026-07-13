const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')

const loginPage = new LoginPage()

Given('user is on the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('user logs in using username {string} and password {string}', (username, password) => {
    loginPage.enterUsername(username)
    loginPage.enterPassword(password)
})

When('clicks the login button', () => {
    loginPage.clickLoginBtn()
})

Then('user should see the dashboard page', () => {
    cy.url().should('include','/dashboard')
})
