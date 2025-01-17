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
        dragHereToSetRowLabel : () => cy.xpath("//span[normalize-space()='Drag here to set row groups']"),

        IDOfertasHeader : () => cy.xpath("//span[normalize-space()='ID Oferta']"),
 /*       IDOfertasFindIcon : () => cy.xpath("(//span[@role='presentation'])[4]",{timeout: 15000}),
        IDOfertasSelectALLCheckBox : () => cy.xpath("(//input[@id='ag-75-input'])[1]"),
        IDOfertasInputField : () => cy.xpath("(//input[@id='ag-72-input'])[1]",{timeout: 15000}),
        severalOptionsFromIDOferta : () => cy.xpath("(//span[@role='presentation'])[3]"),
        groupByIDOfertaOption : () => cy.xpath("(//span[normalize-space()='Group by ID Oferta'])[1]"),
        UnGroupByIDOfertaOption : () => cy.xpath("(//span[@class='ag-icon ag-icon-cancel'])[1]"),*/
        
        DescripcionHeader : () => cy.xpath("//span[normalize-space()='Descripción']"),
   /*     DescripcionFindIcon : () => cy.xpath("(//span[@class='ag-header-icon ag-header-cell-filter-button ag-has-popup-positioned-under'])[1]",{timeout: 15000}),
        DescripcionSelectALLCheckBox : () => cy.xpath("(//input[@id='ag-538-input'])[1]"),
        DescripcionInputField : () => cy.xpath("(//input[@id='ag-535-input'])[1]",{timeout: 15000}),
        severalOptionsFromDescripcion : () => cy.xpath("(//div[@role='presentation'])[72]"),
        groupByDescripcionOption : () => cy.xpath("(//span[normalize-space()='Group by Descripción'])[1]"),
        UnGroupByDescripcionOption : () => cy.xpath("(//span[@class='ag-icon ag-icon-cancel'])[1]"),*/
        PrecioHeader : () => cy.xpath("//span[normalize-space()='Precio']"),
        CommentsHeader : () => cy.xpath("//span[normalize-space()='Comentario']"),
        MedioHeader : () => cy.xpath("//span[normalize-space()='Medio de venta']"),
        AlcanceHeader : () => cy.xpath("//span[normalize-space()='Alcance']"),
        FlagActivoeader : () => cy.xpath("//span[normalize-space()='Flag activo']"),

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
    /* Header IDOfertas */
    pressFindIconIDOfertaHeader() {
      //  this.elements.IDOfertasFindIcon().click()
        this.elements.IDOfertasHeader().next().click()
    }

    pressSortIconIDOfertaHeader() {
        this.elements.IDOfertasHeader().click()
    }

    typeIDOfertaInputField() {
        this.elements.IDOfertasInputField().type('holaaa1')
    }

    selectALLCheckBoxIDOfertas() {
        this.elements.IDOfertasSelectALLCheckBox().click()
    }

    press3DotsIDOferta() {
        this.elements.severalOptionsFromIDOferta().click()
    }

    selectGroupByIDOferta() {
        this.elements.groupByIDOfertaOption().click()
    }

    pressUnSelectGroupByIDOferta() {
        this.elements.UnGroupByIDOfertaOption().click()
    }

    /* Header Descripcion */
    pressFindIconDescripcionHeader() {
        this.elements.DescripcionFindIcon().click()
    }

    pressSortIconDescripcionHeader() {
        this.elements.DescripcionHeader().click()
    }

    typeDescripcionInputField() {
        this.elements.DescripcionInputField().type('holaaa2')
    }

    selectALLCheckBoxDescripcion() {
        this.elements.DescripcionSelectALLCheckBox().click()
    }

    press3DotsDescripcion() {
        this.elements.severalOptionsFromDescripcion().click()
    }

    selectGroupByDescripcion() {
        this.elements.groupByDescripcionOption().click()
    }    
}

module.exports = new FestivalesPage()
 