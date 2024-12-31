import ODDsPage from "../PageElements/ODDsPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesODDsHighLevelDefinition } from "../Features/oDDsTCsHighLevel"
import { constants } from "../Utils/constants"

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
        constants.PAIS = testCasesODDsHighLevelDefinition.TC2.INPUT1
        constants.CAMPANIA = testCasesODDsHighLevelDefinition.TC2.INPUT2
        HomePage.pressODDsButton()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesODDsHighLevelDefinition.TC3.NAME, () => {
        constants.PAIS = testCasesODDsHighLevelDefinition.TC3.INPUT1
        constants.CAMPANIA = testCasesODDsHighLevelDefinition.TC3.INPUT2
        HomePage.pressHomeOption()
        HomePage.pressODDsOption()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesODDsHighLevelDefinition.TC4.NAME, () => {
        constants.PAIS = testCasesODDsHighLevelDefinition.TC4.INPUT1
        constants.CAMPANIA = testCasesODDsHighLevelDefinition.TC4.INPUT2
        constants.ODDs.EVENTO = testCasesODDsHighLevelDefinition.TC4.INPUT3
        HomePage.pressODDsButton()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampaniaFromDropDownMenuButton()
        ODDsPage.pressEventoOption()
    })
    
    it(testCasesODDsHighLevelDefinition.TC5.NAME, () => {
        constants.PAIS = testCasesODDsHighLevelDefinition.TC5.INPUT1
        constants.CAMPANIA = testCasesODDsHighLevelDefinition.TC5.INPUT2
        constants.ODDs.EVENTO = testCasesODDsHighLevelDefinition.TC5.INPUT3
        constants.ODDs.SCENARIO = testCasesODDsHighLevelDefinition.TC5.INPUT4
        constants.ODDs.ABRIR = testCasesODDsHighLevelDefinition.TC5.INPUT5
        HomePage.pressODDsButton()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampaniaFromDropDownMenuButton()
        ODDsPage.pressEventoOption()
        ODDsPage.elements.labelScenarioCard().should('have.text',testCasesODDsHighLevelDefinition.TC5.EXPECTED1)
        ODDsPage.pressAbrirButtonFromScenarioCard()
        ODDsPage.elements.resultadosLabel().contains(testCasesODDsHighLevelDefinition.TC5.EXPECTED2)
        ODDsPage.pressSalirEventosOption()
        ODDsPage.elements.labelScenarioCard().should('have.text',testCasesODDsHighLevelDefinition.TC5.EXPECTED1)
    })
}) 