class ganaMasPage {
    elements = {
        ganaMasLabel : () => cy.get('.text-xl.font-bold'),
        paisDropDownMenu : () => cy.xpath("//div[contains(text(),'Pais ...')]"),
        paisPeruFromDropDownMenu : () => cy.xpath("//div[normalize-space()='Perú']"),
        campaniaDropDownMenu : () => cy.xpath("//div[contains(text(),'Campaña ...')]"),
        campania202501FromDropDownMenu : () => cy.xpath("//div[normalize-space()='202501']")
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
}

module.exports = new ganaMasPage()
 