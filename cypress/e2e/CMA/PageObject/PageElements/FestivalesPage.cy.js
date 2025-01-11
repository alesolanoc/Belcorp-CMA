import { constants } from "../Utils/constants"

class FestivalesPage {
    elements = {
        FestivalesLabel : () => cy.get('.text-xl.font-bold'),
        paisDropDownMenu : () => cy.xpath("//div[contains(text(),'Pais ...')]"),
        paisFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.PAIS + "']"),
        campaniaDropDownMenu : () => cy.xpath("//div[contains(text(),'Campaña ...')]"),
        campaniaFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.CAMPANIA + "']"),
        eventoOption : () => cy.xpath("//span[normalize-space()='" + constants.FESTIVALES.EVENTO + "']",{timeout: 15000}),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='" + constants.FESTIVALES.SCENARIO + "']",{timeout: 15000}),
        abrirButtonScenario : () => cy.xpath("(//button[normalize-space()='Abrir'])[" + constants.FESTIVALES.ABRIR + "]"),
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
 