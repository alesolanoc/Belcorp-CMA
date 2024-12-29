class homePage {
    elements = {
        inicioLabel : () => cy.get('#root > header > div:nth-child(1) > h1'),
        holaLabel : () => cy.get("h2[class='text-xl']"),
        eventosLabel : () => cy.get("div[class='grid grid-cols-1 sm:grid-cols-3 p-8 lg:p-16 gap-8 lg:pt-8'] span:nth-child(1)"),
        ganaMasCard : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)"),
        oDDsCard : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > p:nth-child(2)")     
    }

    pressGanaMasButton() {
        this.elements.ganaMasCard().click()
    }

    pressODDsButton() {
        this.elements.oDDsCard().click()
    }
}

module.exports = new homePage()
 