const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage')
const AdminPage = require('../../pages/AdminPage')

const loginPage = new LoginPage()
const adminPage = new AdminPage()

Given('user logged in as standard_user', () => {
    cy.fixture('users').then((users => {
        const user = users.standard_user
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername(user.username)
        loginPage.enterPassword(user.password)
        loginPage.clickLoginBtn()
    }))
})

When('user navigates to Admin page', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.url().should('include', '/admin')
    cy.screenshot('admin-page', {overwrite: true})
})

When('clicks the Add button', () => {
    adminPage.clickAddButton()
})


When('user fill in add user form using role {string}, status {string}, employee name {string}, username {string}, and password {string}', (role, status, employee_name, username, password) => {
    adminPage.selectRole(role)
    adminPage.selectStatus(status)
    adminPage.inputEmployeeName(employee_name)
    adminPage.inputUsername(username)
    adminPage.inputPasswordAndConfirm(password)
})

When('clicks Save button', () => {
    adminPage.clickSaveButton()
})

When('search user by username {string}', (username) => {
    adminPage.searchAdmin(username)
})

When('click Search button', () => {
    adminPage.clickSearchButton()
})

Then('user should see user with username {string} in table', (username) => {
//    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row')
//    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2) > div')
    
    cy.get('.oxd-table')
      .contains('.oxd-table-cell', username)
      .should('be.visible');
})
