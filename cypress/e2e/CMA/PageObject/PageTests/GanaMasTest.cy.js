import GanaMasPage from "../PageElements/GanaMasPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"
import { testCasesGanaMasHighLevelDefinition } from "../Features/ganaMasTCsHighLevel"
import { constants } from "../Utils/constants"

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
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC2.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC2.INPUT2
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesGanaMasHighLevelDefinition.TC3.NAME, () => {
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC3.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC3.INPUT2
        HomePage.pressHomeOption()
        HomePage.pressGanaMasOption()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
    })

    it(testCasesGanaMasHighLevelDefinition.TC4.NAME, () => {
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC4.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC4.INPUT2
        constants.GANAMAS.EVENTO = testCasesGanaMasHighLevelDefinition.TC4.INPUT3
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
    })

    it(testCasesGanaMasHighLevelDefinition.TC5.NAME, () => {
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC5.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC5.INPUT2
        constants.GANAMAS.EVENTO = testCasesGanaMasHighLevelDefinition.TC5.INPUT3
        constants.GANAMAS.SCENARIO = testCasesGanaMasHighLevelDefinition.TC5.INPUT4
        constants.GANAMAS.ABRIR = testCasesGanaMasHighLevelDefinition.TC5.INPUT5
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC5.EXPECTED1)
        GanaMasPage.pressAbrirButtonFromScenarioCard()
        GanaMasPage.elements.resultadosLabel().contains(testCasesGanaMasHighLevelDefinition.TC5.EXPECTED2)
        GanaMasPage.pressSalirEventosOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC5.EXPECTED1)
    })

    it(testCasesGanaMasHighLevelDefinition.TC6.NAME, () => {
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC6.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC6.INPUT2
        constants.GANAMAS.EVENTO = testCasesGanaMasHighLevelDefinition.TC6.INPUT3
        constants.GANAMAS.SCENARIO = testCasesGanaMasHighLevelDefinition.TC6.INPUT4
        constants.GANAMAS.ABRIR = testCasesGanaMasHighLevelDefinition.TC6.INPUT5
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC6.EXPECTED1)
        GanaMasPage.pressAbrirButtonFromScenarioCard()
        GanaMasPage.pressOfertasTab()
        GanaMasPage.elements.headerLabelOfertasTab().should('have.text',testCasesGanaMasHighLevelDefinition.TC6.EXPECTED2)
        GanaMasPage.pressEventosTab()
        GanaMasPage.elements.headerLabelEventosTab().should('have.text',testCasesGanaMasHighLevelDefinition.TC6.EXPECTED3)
    })

    it(testCasesGanaMasHighLevelDefinition.TC7.NAME, () => {
        constants.PAIS = testCasesGanaMasHighLevelDefinition.TC7.INPUT1
        constants.CAMPANIA = testCasesGanaMasHighLevelDefinition.TC7.INPUT2
        constants.GANAMAS.EVENTO = testCasesGanaMasHighLevelDefinition.TC7.INPUT3
        constants.GANAMAS.SCENARIO = testCasesGanaMasHighLevelDefinition.TC7.INPUT4
        constants.GANAMAS.ABRIR = testCasesGanaMasHighLevelDefinition.TC7.INPUT5
        constants.GANAMAS.NOMBREEVENTO = testCasesGanaMasHighLevelDefinition.TC7.INPUT6
        constants.GANAMAS.DETALLEEVENTO = testCasesGanaMasHighLevelDefinition.TC7.INPUT7
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampaniaFromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text',testCasesGanaMasHighLevelDefinition.TC7.EXPECTED1)
        GanaMasPage.pressAbrirButtonFromScenarioCard()
        GanaMasPage.pressOfertasTab()
        GanaMasPage.elements.headerLabelOfertasTab().should('have.text',testCasesGanaMasHighLevelDefinition.TC7.EXPECTED2)
        GanaMasPage.pressEventosTab()
        GanaMasPage.elements.headerLabelEventosTab().should('have.text',testCasesGanaMasHighLevelDefinition.TC7.EXPECTED3)
        cy.findByText(constants.GANAMAS.NOMBREEVENTO).click()
        cy.findByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED4).should('be.visible')
        cy.findByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED5).should('be.visible')
        cy.findByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED6).should('be.visible')
        cy.findAllByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED7).last().should('be.visible').should('have.text','Total Parametros de Oferta 1')
        cy.findAllByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED8).last().should('be.visible').should('have.text','Total de Segmentos 1')
        cy.findAllByText(testCasesGanaMasHighLevelDefinition.TC7.EXPECTED9).last().should('be.visible').should('have.text','98')
    })
}) 