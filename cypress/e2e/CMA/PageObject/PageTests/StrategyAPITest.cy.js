import { testCasesStrategyAPIsHighLevelDefinition } from "../Features/strategyAPITCsHighLevel"

describe('Strategy API Testing', () =>{

    it(testCasesStrategyAPIsHighLevelDefinition.TC1.NAME, () => {
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC1.INPUT2  + testCasesStrategyAPIsHighLevelDefinition.TC1.INPUT3 + "/" + testCasesStrategyAPIsHighLevelDefinition.TC1.INPUT4
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC1.EXPECTED1)
            expect(response.body.results.country).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC1.EXPECTED2)
            expect(response.body.period_code).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC1.EXPECTED3)
            expect(response.body.id).to.not.be.null
            expect(response.body.process_id).to.not.be.null
            expect(response.body.status_id).to.not.be.null
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesStrategyAPIsHighLevelDefinition.TC2.NAME, () => {
        let encuentra = false
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC2.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC2.INPUT2  + testCasesStrategyAPIsHighLevelDefinition.TC2.INPUT3 + "/" + testCasesStrategyAPIsHighLevelDefinition.TC2.INPUT4 + "/" + testCasesStrategyAPIsHighLevelDefinition.TC2.INPUT5
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC2.EXPECTED1);
            expect(response.body.result.forEach(element => { 
                if ((element.offer_id.to.be.null) && (element.price.to.be.null) && (element.scope_code.to.be.null) && (element.commercial_description.to.be.null) 
                    && (element.experience.to.be.null)) {
                    encuentra = true
                }
            }))
            assert.isFalse(encuentra)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesStrategyAPIsHighLevelDefinition.TC3.NAME, () => {
        let encuentra = false
        const requestBody = {
            country_code : testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT3,
            period_code : testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT4,
            experience : testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT5
        }
        cy.fixture('../e2e/CMA/PageObject/Data/'+testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT6).then((file) => {
            cy.request({
                method: testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT1,
                url: testCasesStrategyAPIsHighLevelDefinition.TC3.INPUT2,
                body : {
                    file,
                    requestBody
                }
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC3.EXPECTED1);
                expect(response.body.result.forEach(element => { 
                    if ((element.offer_id.to.be.null) && (element.price.to.be.null) && (element.scope_code.to.be.null) && (element.commercial_description.to.be.null) 
                        && (element.experience.to.be.null)) {
                        encuentra = true
                    }
                }))
                assert.isFalse(encuentra)
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    it(testCasesStrategyAPIsHighLevelDefinition.TC4.NAME, () => {
        let encuentra = false
        const requestBody = {
            country_code : testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT3,
            period_code : testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT4,
            experience : testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT5,
            escenario_id : testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT6
        }
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC4.INPUT2,
            body : requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC4.EXPECTED1)
            expect(response.message).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC4.EXPECTED2)
            expect(response.result.files_location).to.not.be.null
            cy.log(JSON.stringify(response.body))
        })
    })        

    it(testCasesStrategyAPIsHighLevelDefinition.TC5.NAME, () => {
        let encuentra = false
        const requestBody = {
            country_code : testCasesStrategyAPIsHighLevelDefinition.TC5.INPUT3,
            period_code : testCasesStrategyAPIsHighLevelDefinition.TC5.INPUT4
        }
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC5.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC5.INPUT2,
            body : requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC5.EXPECTED1)
            expect(response.message).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC5.EXPECTED2)
            expect(response.result.flow_id).to.not.be.null
            expect(response.result.country_code).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC5.EXPECTED3)
            expect(response.result.period_code).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC5.EXPECTED4)
            cy.log(JSON.stringify(response.body))
        })
    })        

    it(testCasesStrategyAPIsHighLevelDefinition.TC6.NAME, () => {
        let encuentra = false
        const requestBody = {
            status : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT3,
            timestamp : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT4,
            processId : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT5,
            message : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT6,
            codeStatus : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT7,
            pathOutput : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT8,
            details : [ {paramName : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT9,
                value : testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT10
            }] 
        }
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC6.INPUT2,
            body : requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC6.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })     

    it(testCasesStrategyAPIsHighLevelDefinition.TC7.NAME, () => {
        let encuentra = false
        const requestBody = {
            country_code : testCasesStrategyAPIsHighLevelDefinition.TC7.INPUT3,
            period_code : testCasesStrategyAPIsHighLevelDefinition.TC7.INPUT4
        }
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC7.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC7.INPUT2,
            body : requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC7.EXPECTED1)
            expect(response.message).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC7.EXPECTED2)
            cy.log(JSON.stringify(response.body))
        })
    })  

    it(testCasesStrategyAPIsHighLevelDefinition.TC8.NAME, () => {
        let encuentra = false
        const requestBody = {
            country_code : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT3,
            period_code : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT4,
            transaction_id : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT5,
            actions_policy : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT6,
            source : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT7,
            callback : testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT8
        }
        cy.request({
            method: testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT1,
            url: testCasesStrategyAPIsHighLevelDefinition.TC8.INPUT2,
            body : requestBody
        }).as('request');
        cy.get('@request').then(response => {
            expect(response.status).to.eq(testCasesStrategyAPIsHighLevelDefinition.TC8.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })     
})
