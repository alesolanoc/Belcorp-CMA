import ODDsPage from "../PageElements/ODDsPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"

describe('CMA ODDsPage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it('Validate if Iam in ODDPage then ODD label should be displayed', () => {
        HomePage.pressODDsButton()
        ODDsPage.elements.ODDsLabel().should('have.text','ODD')
    })

    it('Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressODDsButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate I can go from dropDown menu to ODDPage and if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressHomeOption()
        HomePage.pressODDsOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu and select evento1', () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        ODDsPage.pressEventoOption()
    })
    
    it('Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu and select evento1 and abrir any scenario and validate resultado Label and salir de escenario', () => {
        HomePage.pressGanaMasButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        ODDsPage.pressEventoOption()
        ODDsPage.elements.labelScenarioCard().should('have.text','#0 Scenario_2_3')
        ODDsPage.pressAbrirButtonFromScenarioCard()
        ODDsPage.elements.resultadosLabel().contains('RESULTADOS KPI')
        ODDsPage.pressSalirEventosOption()
        ODDsPage.elements.labelScenarioCard().should('have.text','#0 Scenario_2_3')
    })
}) 