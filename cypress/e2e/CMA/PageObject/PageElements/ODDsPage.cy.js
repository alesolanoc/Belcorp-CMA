import { constants } from "../Utils/constants"

class ODDsPage {
    elements = {
        ODDsLabel : () => cy.get('.text-xl.font-bold'),
        paisDropDownMenu : () => cy.xpath("//div[contains(text(),'Pais ...')]"),
        paisFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.PAIS + "']"),
        campaniaDropDownMenu : () => cy.xpath("//div[contains(text(),'Campaña ...')]"),
        campaniaFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.CAMPANIA + "']"),
        eventoOption : () => cy.xpath("//span[normalize-space()='" + constants.ODDs.EVENTO + "']",{timeout: 9000}),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='" + constants.ODDs.SCENARIO + "']"),
        abrirButtonScenario : () => cy.xpath("(//button[normalize-space()='Abrir'])[" + constants.ODDs.ABRIR + "]"),
        resultadosLabel : () => cy.get('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)'),
        salirEventosOption : () => cy.xpath("//button[normalize-space()='Salir de Escenario']")
    }
    
    pressPaisDropDownMenuButton() {
        this.elements.paisDropDownMenu().click()
    }

    pressPaisFromDropDownMenuButton() {
        this.elements.paisFromDropDownMenu().click()
    }

    pressCampaniaDropDownMenuButton() {
        this.elements.campaniaDropDownMenu().click()
    }

    pressCampaniaFromDropDownMenuButton() {
        this.elements.campaniaFromDropDownMenu().click()
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
 