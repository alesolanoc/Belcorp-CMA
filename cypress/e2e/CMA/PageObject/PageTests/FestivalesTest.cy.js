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

    it('Validate if Iam in FestivalesPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressFestivalessButton()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisPeruFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate I can go from dropDown menu to FestivalesPage and if Iam in FestivalesPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressHomeOption()
        HomePage.pressFestivalesOption()
        FestivalesPage.pressPaisDropDownMenuButton()
        FestivalesPage.pressPaisPeruFromDropDownMenuButton()
        FestivalesPage.pressCampaniaDropDownMenuButton()
        FestivalesPage.pressCampania202501FromDropDownMenuButton()
    })
}) 