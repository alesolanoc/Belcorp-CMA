import { testCasesStrategyAPIsHighLevelDefinition } from "../Features/strategyAPITCsHighLevel"

describe('Strategy API Testing', () =>{

    testCasesStrategyAPIsHighLevelDefinition.TC1.forEach(Element => {
        it(Element.NAME, () => {
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2  + Element.INPUT3 + "/" + Element.INPUT4
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.body.results.country).to.eq(Element.EXPECTED2)
                expect(response.body.period_code).to.eq(Element.EXPECTED3)
                expect(response.body.id).to.not.be.null
                expect(response.body.process_id).to.not.be.null
                expect(response.body.status_id).to.not.be.null
                cy.log(JSON.stringify(response.body))
            })
        })
    })

    testCasesStrategyAPIsHighLevelDefinition.TC2.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2  + Element.INPUT3 + "/" + Element.INPUT4 + "/" + Element.INPUT5
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1);
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

    testCasesStrategyAPIsHighLevelDefinition.TC3.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                country_code : Element.INPUT3,
                period_code : Element.INPUT4,
                experience : Element.INPUT5
            }
            cy.fixture('../e2e/CMA/PageObject/Data/'+Element.INPUT6).then((file) => {
                cy.request({
                    method: Element.INPUT1,
                    url: Element.INPUT2,
                    body : {
                        file,
                        requestBody
                    }
                }).as('request');
                cy.get('@request').then(response => {
                    expect(response.status).to.eq(Element.EXPECTED1);
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
    })

    testCasesStrategyAPIsHighLevelDefinition.TC4.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                country_code : Element.INPUT3,
                period_code : Element.INPUT4,
                experience : Element.INPUT5,
                escenario_id : Element.INPUT6
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body : requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.message).to.eq(Element.EXPECTED2)
                expect(response.result.files_location).to.not.be.null
                cy.log(JSON.stringify(response.body))
            })
        })        
    })

    testCasesStrategyAPIsHighLevelDefinition.TC5.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                country_code : Element.INPUT3,
                period_code : Element.INPUT4
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body : requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.message).to.eq(Element.EXPECTED2)
                expect(response.result.flow_id).to.not.be.null
                expect(response.result.country_code).to.eq(Element.EXPECTED3)
                expect(response.result.period_code).to.eq(Element.EXPECTED4)
                cy.log(JSON.stringify(response.body))
            })
        })        
    })

    testCasesStrategyAPIsHighLevelDefinition.TC6.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                status : Element.INPUT3,
                timestamp : Element.INPUT4,
                processId : Element.INPUT5,
                message : Element.INPUT6,
                codeStatus : Element.INPUT7,
                pathOutput : Element.INPUT8,
                details : [ {paramName : Element.INPUT9,
                    value : Element.INPUT10
                }] 
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body : requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
        })     
    })

    testCasesStrategyAPIsHighLevelDefinition.TC7.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                country_code : Element.INPUT3,
                period_code : Element.INPUT4
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body : requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                expect(response.message).to.eq(Element.EXPECTED2)
                cy.log(JSON.stringify(response.body))
            })
        })  
    })

    testCasesStrategyAPIsHighLevelDefinition.TC8.forEach(Element => {
        it(Element.NAME, () => {
            let encuentra = false
            const requestBody = {
                country_code : Element.INPUT3,
                period_code : Element.INPUT4,
                transaction_id : Element.INPUT5,
                actions_policy : Element.INPUT6,
                source : Element.INPUT7,
                callback : Element.INPUT8
            }
            cy.request({
                method: Element.INPUT1,
                url: Element.INPUT2,
                body : requestBody
            }).as('request');
            cy.get('@request').then(response => {
                expect(response.status).to.eq(Element.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
        })     
    })
})
