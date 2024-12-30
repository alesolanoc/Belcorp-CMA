import { constants } from "../Utils/constants"

class ganaMasPage {
    elements = {
        ganaMasLabel : () => cy.get('.text-xl.font-bold'),
        eventoOption : () => cy.xpath("//span[normalize-space()='" + constants.GANAMAS.EVENTO + "']"),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='" + constants.GANAMAS.SCENARIO + "']"),
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

module.exports = new ganaMasPage()
