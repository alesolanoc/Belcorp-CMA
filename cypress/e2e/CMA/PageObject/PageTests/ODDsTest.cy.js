import ODDsPage from "../PageElements/ODDsPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesODDsHighLevelDefinition } from "../Features/oDDsTCsHighLevel"

describe('CMA ODDsPage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it(testCasesODDsHighLevelDefinition.TC1.NAME, () => {
        HomePage.pressODDsButton()
        ODDsPage.elements.ODDsLabel().should('have.text',testCasesODDsHighLevelDefinition.TC1.EXPECTED1)
    })

    it(testCasesODDsHighLevelDefinition.TC2.NAME, () => {
        HomePage.pressODDsButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesODDsHighLevelDefinition.TC3.NAME, () => {
        HomePage.pressHomeOption()
        HomePage.pressODDsOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesODDsHighLevelDefinition.TC4.NAME, () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        ODDsPage.pressEventoOption()
    })
    
    it(testCasesODDsHighLevelDefinition.TC5.NAME, () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        ODDsPage.pressEventoOption()
        ODDsPage.elements.labelScenarioCard().should('have.text',testCasesODDsHighLevelDefinition.TC5.EXPECTED1)
        ODDsPage.pressAbrirButtonFromScenarioCard()
        ODDsPage.elements.resultadosLabel().contains(testCasesODDsHighLevelDefinition.TC5.EXPECTED2)
        ODDsPage.pressSalirEventosOption()
        ODDsPage.elements.labelScenarioCard().should('have.text',testCasesODDsHighLevelDefinition.TC5.EXPECTED1)
    })
}) 