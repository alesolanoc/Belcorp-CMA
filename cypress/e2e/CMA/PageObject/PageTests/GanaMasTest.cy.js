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

    it('Validate if Iam in GanaMasPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressGanaMasButton()
        GanaMasPage.pressPaisDropDownMenuButton()
        GanaMasPage.pressPaisPeruFromDropDownMenuButton()
        GanaMasPage.pressCampaniaDropDownMenuButton()
        GanaMasPage.pressCampania202501FromDropDownMenuButton()
    })
}) 