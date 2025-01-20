import { testCasesPlanningFESAPIsHighLevelDefinition } from "../Features/planningFES-APITCsHighLevel"

describe('Planning FES API Testing', () =>{

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC1.NAME, () => {
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC1.INPUT2 + testCasesPlanningFESAPIsHighLevelDefinition.TC1.INPUT3 + "/" + testCasesPlanningFESAPIsHighLevelDefinition.TC1.INPUT4
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC1.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC1.EXPECTED2)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC2.NAME, () => {
        let encuentra = false
        const requestBody = {
            idScenery : testCasesPlanningFESAPIsHighLevelDefinition.TC2.INPUT4,
            isManual : testCasesPlanningFESAPIsHighLevelDefinition.TC2.INPUT5
        }
        cy.fixture('../e2e/CMA/PageObject/Data/'+testCasesPlanningFESAPIsHighLevelDefinition.TC2.INPUT3).then((file) => {
            cy.request({
                method: testCasesPlanningFESAPIsHighLevelDefinition.TC2.INPUT1,
                url: testCasesPlanningFESAPIsHighLevelDefinition.TC2.INPUT2,
                body : {
                    file,
                    requestBody
                }
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC2.EXPECTED1)
                expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC2.EXPECTED2)
                cy.log(JSON.stringify(response.body))
            })
        })
    })    

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC3.NAME, () => {
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC3.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC3.INPUT2 + testCasesPlanningFESAPIsHighLevelDefinition.TC3.INPUT3 
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC3.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC3.EXPECTED2)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC4.NAME, () => {
        const requestBody = {
            idScenery : testCasesPlanningFESAPIsHighLevelDefinition.TC4.INPUT3
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC4.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC4.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC4.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC4.EXPECTED2)
            expect(response.body.result.success).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC4.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC5.NAME, () => {
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC5.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC5.INPUT2 + testCasesPlanningFESAPIsHighLevelDefinition.TC5.INPUT3
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC5.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC5.EXPECTED2)
            expect(response.body.result.FestivalConfiguration).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC5.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC6.NAME, () => {
        const requestBody = {
            ConsultantGroup : [{id : testCasesPlanningFESAPIsHighLevelDefinition.TC6.INPUT3,
                                 levels : [testCasesPlanningFESAPIsHighLevelDefinition.TC6.INPUT4]
            }],
            ScenarioId : testCasesPlanningFESAPIsHighLevelDefinition.TC6.INPUT5
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC6.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC6.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC6.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC6.EXPECTED2)
            expect(response.body.result.Process).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC6.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC7.NAME, () => {
        const requestBody = {
            ConsultantGroup : [{id : testCasesPlanningFESAPIsHighLevelDefinition.TC7.INPUT3,
                                 levels : [testCasesPlanningFESAPIsHighLevelDefinition.TC7.INPUT4]
            }]
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC7.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC7.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC7.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC7.EXPECTED2)
            expect(response.body.result.Process).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC7.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC8.NAME, () => {
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC8.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC8.INPUT2 
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC8.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC9.NAME, () => {
        const requestBody = {
            country : testCasesPlanningFESAPIsHighLevelDefinition.TC9.INPUT3,
            period : testCasesPlanningFESAPIsHighLevelDefinition.TC9.INPUT4
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC9.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC9.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC9.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC9.EXPECTED2)
            expect(response.body.result).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC9.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC10.NAME, () => {
        const requestBody = {
            option : testCasesPlanningFESAPIsHighLevelDefinition.TC10.INPUT3,
            idworksession : testCasesPlanningFESAPIsHighLevelDefinition.TC10.INPUT4
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC10.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC10.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC10.EXPECTED1)
            expect(response.body.message).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC10.EXPECTED2)
            expect(response.body.result.success).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC10.EXPECTED3)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningFESAPIsHighLevelDefinition.TC11.NAME, () => {
        const requestBody = {
            idScenery : testCasesPlanningFESAPIsHighLevelDefinition.TC11.INPUT3
        }
        cy.request({
            method: testCasesPlanningFESAPIsHighLevelDefinition.TC11.INPUT1,
            url: testCasesPlanningFESAPIsHighLevelDefinition.TC11.INPUT2,
            body: requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesPlanningFESAPIsHighLevelDefinition.TC11.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })    
})