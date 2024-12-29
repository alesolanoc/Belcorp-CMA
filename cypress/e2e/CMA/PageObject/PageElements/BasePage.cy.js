class BasePage 
{
    clearContents() {
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.clearCookies()
    }

    goToURL() {
        cy.visit('http://localhost:5173/',{failOnStatusCode: false}) 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return !err.message.includes(`Cannot read property '__error' of null`);
          })
        //  cy.wait(2000)
    }
}

module.exports = new BasePage()
