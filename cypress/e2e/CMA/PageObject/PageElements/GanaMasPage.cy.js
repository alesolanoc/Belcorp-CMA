import { constants } from "../Utils/constants"

class ganaMasPage {
    elements = {
        ganaMasLabel : () => cy.get('.text-xl.font-bold'),
        paisDropDownMenu : () => cy.xpath("//div[contains(text(),'Pais ...')]"),
        paisFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.PAIS + "']"),
        campaniaDropDownMenu : () => cy.xpath("//div[contains(text(),'Campaña ...')]"),
        campaniaFromDropDownMenu : () => cy.xpath("//div[normalize-space()='" + constants.CAMPANIA + "']"),
        eventoOption : () => cy.xpath("//span[normalize-space()='" + constants.GANAMAS.EVENTO + "']"),
        labelScenarioCard : () => cy.xpath("//span[normalize-space()='" + constants.GANAMAS.SCENARIO + "']"),
        abrirButtonScenario : () => cy.xpath("(//button[normalize-space()='Abrir'])[" + constants.GANAMAS.ABRIR + "]"),
        ofertasTab : () => cy.xpath("(//button[normalize-space()='Ofertas'])[1]"),
        headerLabelOfertasTab : () => cy.xpath("//label[normalize-space()='Ingresar Id de ofertas creadas en Planit Evo:']"),
        eventosTab : () => cy.xpath("(//button[normalize-space()='Eventos'])[1]"),
        headerLabelEventosTab : () => cy.xpath("(//div[normalize-space()='Eventos'])[1]"),
        eventoIconSection : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(" + constants.GANAMAS.NroEVENTO + ") > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > button:nth-child(1) > div:nth-child(2)"),
        detalleDelEventoLabelSection : () => cy.xpath("(//p[@class='font-medium text-muted-foreground px-4 pb-2 text-xs'][normalize-space()='Detalles del Evento'])[" + constants.GANAMAS.DETALLEEVENTO + "]", {timeout: 5000}),
        totalParametroOferta : () => cy.xpath("(//strong[contains(text(),'1')])[9]"),
        totalSegmentos : () => cy.xpath("(//strong[contains(text(),'1')])[10]"),
        totalOfertas : () => cy.xpath("(//strong[contains(text(),'98')])[5]"),
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

    pressOfertasTab() {
        this.elements.ofertasTab().click()
    }

    pressEventosTab() {
        this.elements.eventosTab().click()
    }

    pressEventosSectionSelect() {
        this.elements.eventoIconSection().click()
    }

    pressSalirEventosOption() {
        this.elements.salirEventosOption().click()
    }
}

module.exports = new ganaMasPage()
