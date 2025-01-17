import { constants } from "../Utils/constants"

class homePage {
    elements = {
        inicioLabel : () => cy.get('#root > header > div:nth-child(1) > h1'),
        holaLabel : () => cy.get("h2[class='text-xl']"),
        eventosLabel : () => cy.xpath("//span[normalize-space()='Eventos']"),
        ganaMasCard : () => cy.xpath("//div[normalize-space()='Gana +']"),
        oDDsCard : () => cy.xpath("//div[normalize-space()='ODD']"),     
        festivalesCard : () => cy.xpath("//div[normalize-space()='Festivales']"),
        carritoSugeridoCard :() => cy.xpath("//div[normalize-space()='Carrito Sugerido']"),
        leftDropDownMenu : () => cy.get("button[id='radix-:r2:']"),
        leftDropDownMenuInicioOption : () => cy.xpath("//div[contains(text(),'Inicio')]"),
        leftDropDownMenuGanaMasOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='Gana +']"),
        leftDropDownMenuODDsOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='ODD']"),
        leftDropDownMenuFestivalesOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='Festivales']")
    }
    
    pressGanaMasButton() {
        this.elements.ganaMasCard().click()
    }

    pressODDsButton() {
        this.elements.oDDsCard().click()
    }

    pressFestivalessButton() {
        this.elements.festivalesCard().click()
    }

    pressCarritoSugeridoButton() {
        this.elements.carritoSugeridoCard().click()
    }

    pressHomeOption() {
        this.elements.leftDropDownMenu().click()
    }

    pressInicioOption() {
        this.elements.leftDropDownMenuInicioOption().click()
    }

    pressGanaMasOption() {
        this.elements.leftDropDownMenuGanaMasOption().click()
    }

    pressODDsOption() {
        this.elements.leftDropDownMenuODDsOption().click()
    }

    pressFestivalesOption() {
        this.elements.leftDropDownMenuFestivalesOption().click()
    }
}

module.exports = new homePage()
 