import { testCasesPlanningFESAPIsHighLevelDefinition } from "../Features/planningFES-APITCsHighLevel"

describe('Planning FES API Testing', () =>{

    testCasesPlanningFESAPIsHighLevelDefinition.TC1.forEach(Element => {
        it(Element.NAME, () => {
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2 + Element.INPUT3 + "/" + Element.INPUT4
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC2.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                idScenery : Element.INPUT4,
                isManual : Element.INPUT5
            }
            cy.fixture('../e2e/CMA/PageObject/Data/'+Element.INPUT3).then((file) => {
                cy.request({
                    method: Element.INPUT1,
                    url: Element.INPUT2,
                    body : {
                        file,
                        requestBody
                    }
                }).as('request');
                cy.get('@request').then(response => {
                    expect(response.status).to.eq(Element.EXPECTED1)
                    expect(response.body.message).to.eq(Element.EXPECTED2)
                    cy.log(JSON.stringify(response.body))
                })
            })
        })
    })    

    testCasesPlanningFESAPIsHighLevelDefinition.TC3.forEach(Element => {
        it(Element.NAME, () => {
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2 + Element.INPUT3 
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC4.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                idScenery : Element.INPUT3
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result.success).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC5.forEach(Element => {
        it(Element.NAME, () => {
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2 + Element.INPUT3
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result.FestivalConfiguration).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC6.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                ConsultantGroup : [{id : Element.INPUT3,
                                    levels : [Element.INPUT4]
                }],
                ScenarioId : Element.INPUT5
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result.Process).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC7.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                ConsultantGroup : [{id : Element.INPUT3,
                                    levels : [Element.INPUT4]
                }]
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result.Process).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC8.forEach(Element => {
        it(Element.NAME, () => {
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2 
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC9.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                country : Element.INPUT3,
                period : Element.INPUT4
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC10.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                option : Element.INPUT3,
                idworksession : Element.INPUT4
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.message).to.eq(Element.EXPECTED2)
                expect(response.body.result.success).to.eq(Element.EXPECTED3)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesPlanningFESAPIsHighLevelDefinition.TC11.forEach(Element => {
        it(Element.NAME, () => {
            const requestBody = {
                idScenery : Element.INPUT3
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body: requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
        })
    })    
})