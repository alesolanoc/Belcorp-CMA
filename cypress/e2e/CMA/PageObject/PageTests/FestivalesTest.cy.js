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
}) 