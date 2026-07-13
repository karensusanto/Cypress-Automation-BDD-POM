class AdminPage{
    clickAddButton(){
        cy.contains('Add').click()
    }
    
    selectRole(role){
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        
        if (role == "Admin"){
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        }
        else if (role == "EES"){
            cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        }
    }
    
    selectStatus(status){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        
        if (status == "Enabled"){
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        }
        else if (status == "Disabled"){
            cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        }
    }
    
    inputEmployeeName(employee_name){
        cy.get('.oxd-autocomplete-text-input > input').type(employee_name, { delay: 100 })
        cy.wait(5000)
        cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    }
    
    inputUsername(username){
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }
    
    inputPasswordAndConfirm(password){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, { delay: 100 })
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password, { delay: 100 })
    }
    
    clickSaveButton(){
        cy.contains('Save').click()
        cy.wait(5000)
    }
    
    searchAdmin(username){
        cy.get('input').eq(1).type(username, { delay: 100 })
    }
    
    clickSearchButton(){
        cy.contains('Search').click()
        cy.wait(5000)
        cy.screenshot('admin-filtered-page', {overwrite: true})
    }
}

module.exports = AdminPage
