import BasePage from "../PageElements/BasePage.cy"
import HomePage from "../PageElements/HomePage.cy"

describe('CMA HomePage Implementation', () =>{

    before('Clean local session storage and cookies', () => {
        BasePage.clearContents()
    })

    beforeEach(() => {
        BasePage.goToURL()
    })

    it('Validate if Iam in HomePage then Inicio label should be displayed', () => {
        HomePage.elements.inicioLabel().should('have.text','Inicio')
    })

    it('Validate if Iam in HomePage then Hola label should be displayed', () => {
        HomePage.elements.holaLabel().contains('Hola')
    })

    it('Validate if Iam in HomePage then Eventos label should be displayed', () => {
        HomePage.elements.eventosLabel().contains('Evento')
    })

    it('Validate if Iam in HomePage then I should be able to get into Gana+ page after click Gana+ card', () => {
        HomePage.pressGanaMasButton()
    })
}) 