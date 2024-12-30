import FestivalesPage from "../PageElements/FestivalesPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesFestivalesHighLevelDefinition } from "../Features/festivalesTCsHighLevel"


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
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesFestivalesHighLevelDefinition.TC3.NAME, () => {
        HomePage.pressHomeOption()
        HomePage.pressFestivalesOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesFestivalesHighLevelDefinition.TC4.NAME, () => {
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
    })
    
    it(testCasesFestivalesHighLevelDefinition.TC5.NAME, () => {
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
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