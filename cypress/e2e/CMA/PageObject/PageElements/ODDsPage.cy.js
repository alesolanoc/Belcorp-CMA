class ODDsPage {
    elements = {
        ODDsLabel : () => cy.get('.text-xl.font-bold'),
        eventoOption : () => cy.xpath("//span[normalize-space()='Envio #1']"),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='#0 Scenario_2_3']"),
        abrirButtonScenario : () => cy.get('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)'),
        resultadosLabel : () => cy.get('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)'),
        salirEventosOption : () => cy.xpath("//button[normalize-space()='Salir de Escenario']")
    }
    
    pressEventoOption() {
        this.elements.eventoOption().click()
    }

    pressAbrirButtonFromScenarioCard() {
        this.elements.abrirButtonScenario().click()
    }

    pressSalirEventosOption() {
        this.elements.salirEventosOption().click()
    }
}

module.exports = new ODDsPage()
 