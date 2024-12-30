import FestivalesPage from "../PageElements/FestivalesPage.cy"
import HomePage from "../PageElements/HomePage.cy"
import BasePage from "../PageElements/BasePage.cy"

describe('CMA FestivalesPage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it('Validate if Iam in FestivalesPage then Gana+ label should be displayed', () => {
        HomePage.pressFestivalessButton()
        FestivalesPage.elements.FestivalesLabel().should('have.text','Festivales')
    })

    it('Validate if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate I can go from dropDown menu to FestivalesPage and if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressHomeOption()
        HomePage.pressFestivalesOption()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu and select evento1', () => {
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
    })
    
    it('Validate if Iam in FestivalesPage then I should be able to visit tabs', () => {
        HomePage.pressFestivalessButton()
        HomePage.pressPaisDropDownMenuButton()
        HomePage.pressPaisPeruFromDropDownMenuButton()
        HomePage.pressCampaniaDropDownMenuButton()
        HomePage.pressCampania202501FromDropDownMenuButton()
        FestivalesPage.pressEventoOption()
        FestivalesPage.elements.labelScenarioCard().should('have.text','#0 Scenario_23_1')
        FestivalesPage.pressAbrirButtonFromScenarioCard()
        FestivalesPage.pressCargarPremiosTab()
        FestivalesPage.elements.headerLabelCargarPremiosTab().should('have.text','Ingresar Id de ofertas creadas en Planit Evo:')
        FestivalesPage.pressConsultorasTab()
        FestivalesPage.elements.headerLabelConsultorasTab().should('have.text','Carga Manual')
        FestivalesPage.pressNivelesTab()
        FestivalesPage.elements.headerLabelNivelesTab().should('have.text','Niveles por grupo')
        FestivalesPage.pressAsignarPremiosTab()
    })
}) 