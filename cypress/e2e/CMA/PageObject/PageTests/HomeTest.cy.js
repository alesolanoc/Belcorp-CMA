import BasePage from "../PageElements/BasePage.cy"
import HomePage from "../PageElements/HomePage.cy"
import { testCasesHomeHighLevelDefinition } from "../Features/homeTCsHighLevel"


describe('CMA HomePage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

 /*   it(testCasesHomeHighLevelDefinition.TC1.NAME, () => {
        HomePage.elements.inicioLabel().should('have.text',testCasesHomeHighLevelDefinition.TC1.EXPECTED1)
    })

    it(testCasesHomeHighLevelDefinition.TC2.NAME, () => {
        HomePage.elements.holaLabel().contains(testCasesHomeHighLevelDefinition.TC2.EXPECTED1)
    })

    it(testCasesHomeHighLevelDefinition.TC3.NAME, () => {
        HomePage.elements.eventosLabel().contains(testCasesHomeHighLevelDefinition.TC3.EXPECTED1)
    })

    it(testCasesHomeHighLevelDefinition.TC4.NAME, () => {
        HomePage.pressGanaMasButton()
    })*/

    it(testCasesHomeHighLevelDefinition.TC5.NAME, () => {
        HomePage.pressCarritoSugeridoButton()
    })
}) 