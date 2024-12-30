class homePage {
    elements = {
        inicioLabel : () => cy.get('#root > header > div:nth-child(1) > h1'),
        holaLabel : () => cy.get("h2[class='text-xl']"),
        paisDropDownMenu : () => cy.xpath("//div[contains(text(),'Pais ...')]"),
        paisPeruFromDropDownMenu : () => cy.xpath("//div[normalize-space()='Perú']"),
        campaniaDropDownMenu : () => cy.xpath("//div[contains(text(),'Campaña ...')]"),
        campania202501FromDropDownMenu : () => cy.xpath("//div[normalize-space()='202501']"),
        eventosLabel : () => cy.get("div[class='grid grid-cols-1 sm:grid-cols-3 p-8 lg:p-16 gap-8 lg:pt-8'] span:nth-child(1)"),
           ganaMasCard : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)"),
              oDDsCard : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > p:nth-child(2)"),     
        festivalesCard : () => cy.get("body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > p:nth-child(2)"),
        leftDropDownMenu : () => cy.get("button[id='radix-:r2:']"),
        leftDropDownMenuInicioOption : () => cy.xpath("//div[contains(text(),'Inicio')]"),
        leftDropDownMenuGanaMasOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='Gana +']"),
        leftDropDownMenuODDsOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='ODD']"),
        leftDropDownMenuFestivalesOption : () => cy.xpath("//div[@role='menuitem'][normalize-space()='Festivales']")
    }
    
    pressPaisDropDownMenuButton() {
        this.elements.paisDropDownMenu().click()
    }

    pressPaisPeruFromDropDownMenuButton() {
        this.elements.paisPeruFromDropDownMenu().click()
    }

    pressCampaniaDropDownMenuButton() {
        this.elements.campaniaDropDownMenu().click()
    }

    pressCampania202501FromDropDownMenuButton() {
        this.elements.campania202501FromDropDownMenu().click()
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
 