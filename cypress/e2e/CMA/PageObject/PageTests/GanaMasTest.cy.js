import GanaMasPage from "../PageElements/GanaMasPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"

describe('CMA Gana+Page Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it('Validate if Iam in GanaMasPage then Gana+ label should be displayed', () => {
        HomePage.pressGanaMasButton()
        GanaMasPage.elements.ganaMasLabel().should('have.text','Gana +')
    })

    it('Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate I can go from dropDown menu to GanaMasPage and if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressHomeOption()
        HomePage.pressGanaMasOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1', () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
    })

    it('Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1 and abrir any scenario and validate resultado Label and salir de escenario', () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        GanaMasPage.pressEventoOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text','#0 Scenario_2_3')
        GanaMasPage.pressAbrirButtonFromScenarioCard()
        GanaMasPage.elements.resultadosLabel().contains('RESULTADOS KPI')
        GanaMasPage.pressSalirEventosOption()
        GanaMasPage.elements.labelScenarioCard().should('have.text','#0 Scenario_2_3')
    })
}) 