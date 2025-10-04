describe('Login', () => {
    it('Realizar login com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        //Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it.only('Realizar login com usuário inválido', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        //Act
        cy.get('[data-test="username"]').type('user.invalid')
        cy.get('[data-test="password"]').type('senha')
        cy.get('[data-test="login-button"]').click()

        //Assert
        cy.get('[data-test="error"]').should('be.visible')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    
})