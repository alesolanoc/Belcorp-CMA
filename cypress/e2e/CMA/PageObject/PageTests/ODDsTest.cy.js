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

    it('Validate if Iam in ODDPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressODDsButton()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisPeruFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampania202501FromDropDownMenuButton()
    })

    it('Validate I can go from dropDown menu to ODDPage and if Iam in ODDPage then I sohuld be able to select Peru and 202501 from dropdown menu', () => {
        HomePage.pressHomeOption()
        HomePage.pressODDsOption()
        ODDsPage.pressPaisDropDownMenuButton()
        ODDsPage.pressPaisPeruFromDropDownMenuButton()
        ODDsPage.pressCampaniaDropDownMenuButton()
        ODDsPage.pressCampania202501FromDropDownMenuButton()
    })
}) 