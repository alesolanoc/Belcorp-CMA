import FestivalesPage from "../PageElements/FestivalesPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesFestivalesHighLevelDefinition } from "../Features/festivalesTCsHighLevel"
import { constants } from "../Utils/constants"

describe('CMA FestivalesPage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it(testCasesFestivalesHighLevelDefinition.TC1.NAME, () => {
        HomePage.pressFestivalessButton()
        FestivalesPage.elements.FestivalesLabel().should('have.text',testCasesFestivalesHighLevelDefinition.TC1.EXPECTED1)
    })

    it(testCasesFestivalesHighLevelDefinition.TC2.NAME, () => {
        constants.PAIS = testCasesFestivalesHighLevelDefinition.TC2.INPUT1
        constants.CAMPANIA = testCasesFestivalesHighLevelDefinition.TC2.INPUT2
        HomePage.pressFestivalessButton()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesFestivalesHighLevelDefinition.TC3.NAME, () => {
        constants.PAIS = testCasesFestivalesHighLevelDefinition.TC3.INPUT1
        constants.CAMPANIA = testCasesFestivalesHighLevelDefinition.TC3.INPUT2
        HomePage.pressHomeOption()
        HomePage.pressFestivalesOption()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesFestivalesHighLevelDefinition.TC4.NAME, () => {
        constants.PAIS = testCasesFestivalesHighLevelDefinition.TC4.INPUT1
        constants.CAMPANIA = testCasesFestivalesHighLevelDefinition.TC4.INPUT2
        constants.FESTIVALES.EVENTO = testCasesFestivalesHighLevelDefinition.TC4.INPUT3
        HomePage.pressFestivalessButton()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampaniaFromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
    })
    
    it(testCasesFestivalesHighLevelDefinition.TC5.NAME, () => {
        constants.PAIS = testCasesFestivalesHighLevelDefinition.TC5.INPUT1
        constants.CAMPANIA = testCasesFestivalesHighLevelDefinition.TC5.INPUT2
        constants.FESTIVALES.EVENTO = testCasesFestivalesHighLevelDefinition.TC5.INPUT3
        constants.FESTIVALES.SCENARIO = testCasesFestivalesHighLevelDefinition.TC5.INPUT4
        constants.FESTIVALES.ABRIR = testCasesFestivalesHighLevelDefinition.TC5.INPUT5
        HomePage.pressFestivalessButton()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampaniaFromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
        FestivalesPage.elements.labelScenarioCard().should('have.text',testCasesFestivalesHighLevelDefinition.TC5.EXPECTED1)
        FestivalesPage.pressAbrirButtonFromScenarioCard()
        FestivalesPage.pressCargarPremiosTab()
        FestivalesPage.elements.headerLabelCargarPremiosTab().should('have.text',testCasesFestivalesHighLevelDefinition.TC5.EXPECTED2)
        FestivalesPage.pressConsultorasTab()
        FestivalesPage.elements.headerLabelConsultorasTab().should('have.text',testCasesFestivalesHighLevelDefinition.TC5.EXPECTED3)
        FestivalesPage.pressNivelesTab()
        FestivalesPage.elements.headerLabelNivelesTab().should('have.text',testCasesFestivalesHighLevelDefinition.TC5.EXPECTED4)
        FestivalesPage.pressAsignarPremiosTab()
    })

    it.only(testCasesFestivalesHighLevelDefinition.TC6.NAME, () => {
        constants.PAIS = testCasesFestivalesHighLevelDefinition.TC6.INPUT1
        constants.CAMPANIA = testCasesFestivalesHighLevelDefinition.TC6.INPUT2
        constants.FESTIVALES.EVENTO = testCasesFestivalesHighLevelDefinition.TC6.INPUT3
        constants.FESTIVALES.SCENARIO = testCasesFestivalesHighLevelDefinition.TC6.INPUT4
        constants.FESTIVALES.ABRIR = testCasesFestivalesHighLevelDefinition.TC6.INPUT5
        HomePage.pressFestivalessButton()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampaniaFromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
        FestivalesPage.elements.labelScenarioCard().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED1)
        FestivalesPage.pressAbrirButtonFromScenarioCard()
        FestivalesPage.pressCargarPremiosTab()
        FestivalesPage.elements.headerLabelCargarPremiosTab().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED2)
        FestivalesPage.elements.IDOfertasHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED3)
     /*   FestivalesPage.pressSortIconIDOfertaHeader()
        FestivalesPage.pressFindIconIDOfertaHeader()
        FestivalesPage.selectALLCheckBoxIDOfertas()
        cy.window().then( function(p){
            FestivalesPage.typeIDOfertaInputField()
        })
        FestivalesPage.pressSortIconIDOfertaHeader()
        FestivalesPage.press3DotsIDOferta()
        FestivalesPage.selectGroupByIDOferta()
        FestivalesPage.press3DotsIDOferta()
        FestivalesPage.pressUnSelectGroupByIDOferta()*/

        FestivalesPage.elements.DescripcionHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED4)
     /*   FestivalesPage.pressSortIconDescripcionHeader()
        FestivalesPage.pressFindIconDescripcionHeader()
        FestivalesPage.selectALLCheckBoxDescripcion()
        cy.window().then( function(p){
            FestivalesPage.typeDescripcionInputField()
        })
        FestivalesPage.pressSortIconDescripcionHeader()
        FestivalesPage.press3DotsDescripcion()
        FestivalesPage.selectGroupByDescripcion()
        FestivalesPage.press3DotsDescripcion()*/
        FestivalesPage.elements.PrecioHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED5)
        FestivalesPage.elements.CommentsHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED6)
        FestivalesPage.elements.MedioHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED7)
        FestivalesPage.elements.AlcanceHeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED8)
        FestivalesPage.elements.FlagActivoeader().should('have.text',testCasesFestivalesHighLevelDefinition.TC6.EXPECTED9)

    })
}) 