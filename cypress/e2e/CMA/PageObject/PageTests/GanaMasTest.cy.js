import GanaMasPage from "../PageElements/GanaMasPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesGanaMasHighLevelDefinition } from "../Features/ganaMasTCsHighLevel"


describe('CMA Gana+Page Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it(testCasesGanaMasHighLevelDefinition.TC1.NAME, () => {
        HomePage.pressGanaMasButton()
        GanaMasPage.elements.ganaMasLabel().should('have.text',testCasesGanaMasHighLevelDefinition.TC1.EXPECTED1)
    })

    it(testCasesGanaMasHighLevelDefinition.TC2.NAME, () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesGanaMasHighLevelDefinition.TC3.NAME, () => {
        HomePage.pressHomeOption()
        HomePage.pressGanaMasOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it(testCasesGanaMasHighLevelDefinition.TC4.NAME, () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
    })

    it(testCasesGanaMasHighLevelDefinition.TC5.NAME, () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC5.EXPECTED1)
        GanaMasPage.pressAbrirButtonFromScenarioCard()
        GanaMasPage.elements.resultadosLabel().contains(testCasesGanaMasHighLevelDefinition.TC5.EXPECTED2)
        GanaMasPage.pressSalirEventosOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC5.EXPECTED1)
    })
}) 