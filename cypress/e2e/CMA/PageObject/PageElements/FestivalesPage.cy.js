import { constants } from "../Utils/constants"

class FestivalesPage {
    elements = {
        FestivalesLabel : () => cy.get('.text-xl.font-bold'),
        eventoOption : () => cy.xpath("//span[normalize-space()='" + constants.FESTIVALES.EVENTO + "']"),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='" + constants.FESTIVALES.SCENARIO + "']"),
        abrirButtonScenario : () => cy.get('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)'),
        cargarPremiosTab : () => cy.xpath("(//button[normalize-space()='Carga Premios'])[1]"),
        headerLabelCargarPremiosTab : () => cy.xpath("//label[normalize-space()='Ingresar Id de ofertas creadas en Planit Evo:']"),
        consultorasTab : () => cy.xpath("(//button[normalize-space()='Consultoras'])[1]"),
        headerLabelConsultorasTab : () => cy.xpath("//h1[normalize-space()='Carga Manual']"),
        nivelesTab : () => cy.xpath("(//button[normalize-space()='Niveles'])[1]"),
        headerLabelNivelesTab : () => cy.xpath("//label[normalize-space()='Niveles por grupo']"),
        asignarPremiosTab : () => cy.xpath("(//button[normalize-space()='Asignar Premios'])[1]")
    }

    pressEventoOption() {
        this.elements.eventoOption().click()
    }
    
    pressAbrirButtonFromScenarioCard() {
        this.elements.abrirButtonScenario().click()
    }

    pressCargarPremiosTab() {
        this.elements.cargarPremiosTab().click()
    }

    pressConsultorasTab() {
        this.elements.consultorasTab().click()
    }

    pressNivelesTab() {
        this.elements.nivelesTab().click()
    }

    pressAsignarPremiosTab() {
        this.elements.asignarPremiosTab().click()
    }
}

module.exports = new FestivalesPage()
 