class LoginPage{
    enterUsername(username){
        cy.get('[name="username"]').clear().type(username)
    }
    
    enterPassword(password){
        cy.get('[name="password"]').clear().type(password)
    }
    
    clickLoginBtn(){
        cy.get('.oxd-button').click()
    }
}

module.exports = LoginPage
