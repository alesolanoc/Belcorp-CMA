import { testCasesPlanningAPIsHighLevelDefinition } from "../Features/planningAPITCsHighLevel"


describe('Planning API Testing', () =>{

    it(testCasesPlanningAPIsHighLevelDefinition.TC1.NAME, () => {
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT2
        }).as('getAllCountries');
        cy.get('@getAllCountries').then(response => {
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC1.EXPECTED1);
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningAPIsHighLevelDefinition.TC2.NAME, () => {
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC2.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC2.INPUT2
        }).as('getAllCountries');
        cy.get('@getAllCountries').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.status_code).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC2.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningAPIsHighLevelDefinition.TC3.NAME, () => {
        let encuentra = false
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC3.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC3.INPUT2
        }).as('getAllCountries')
        cy.get('@getAllCountries').then(response => {
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC3.EXPECTED1)
            expect(response.body.result.Countries.forEach(element => {
                cy.log(element.Code)
                if ((element.Code == testCasesPlanningAPIsHighLevelDefinition.TC3.EXPECTED2) &&
                (element.Name == testCasesPlanningAPIsHighLevelDefinition.TC3.EXPECTED3)) {
                    encuentra = true
                }
            }))
            assert.isTrue(encuentra)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningAPIsHighLevelDefinition.TC4.NAME, () => {
        let encuentra = false
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT2
        }).as('getOneOption');
        cy.get('@getOneOption').then(response => {
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC4.EXPECTED1)
            expect(response.body.result.Options.forEach(element => { 
                if ((element.Name == testCasesPlanningAPIsHighLevelDefinition.TC4.EXPECTED2) &&
                (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC4.EXPECTED3)) {
                    encuentra = true
                }
            }))
            assert.isTrue(encuentra)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningAPIsHighLevelDefinition.TC5.NAME+' the related array position are hardCoded', () => {
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT2
        }).as('getOneCountry');
        cy.get('@getOneCountry').then(response => {
            let countryCode = response.body.result.Countries[0].Code
            cy.request({
                method: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT1,
                url: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT2
            }).as('getOneOption');
            cy.get('@getOneOption').then(response => {
                let experienceCode = response.body.result.Options[1].ExperienceCode
                const requestBody = {
                    CountryCode : countryCode,
                    ExperienceCode : experienceCode
                }
                cy.request({
                    method: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT1,
                    url: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT2,
                    body: requestBody                    
                }).as('getCampaign');
                cy.get('@getCampaign').then(response => {
                    expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED1)
                    expect(response.body.result.Campaigns[0].CampaignCode).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED2)
                    cy.log(JSON.stringify(response.body))
                })
                expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC4.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC1.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })

    
    it(testCasesPlanningAPIsHighLevelDefinition.TC5.NAME+' only on array position is not hardCoded', () => {
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT2
        }).as('getOneCountry');
        cy.get('@getOneCountry').then(response => {
            let countryCode = response.body.result.Countries[0].Code
            cy.request({
                method: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT1,
                url: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT2
            }).as('getOneOption');
            cy.get('@getOneOption').then(response => {
                let experienceCode = response.body.result.Options[1].ExperienceCode
                const requestBody = {
                    CountryCode : countryCode,
                    ExperienceCode : experienceCode
                }
                let encuentra = false;
                cy.request({
                    method: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT1,
                    url: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT2,
                    body: requestBody                    
                }).as('getCampaign');
                cy.get('@getCampaign').then(response => {
                    expect(response.body.result.Campaigns.forEach(element => {
                        if ((element.CampaignCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED2) &&
                        (element.CountryCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED3) &&
                        (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED4) &&
                        (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED5) &&
                        (element.Active == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED6)) {
                            encuentra = true
                            cy.log(element.CountryCode)
                        }
                    }))
                    assert.isTrue(encuentra)
                    cy.log(JSON.stringify(response.body))
                    cy.log(encuentra)
                })
                expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC4.EXPECTED1)
                cy.log(JSON.stringify(response.body))
            })
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC1.EXPECTED1)
            cy.log(JSON.stringify(response.body))
        })
    })

    it(testCasesPlanningAPIsHighLevelDefinition.TC5.NAME+' not ALL positions in the array are hardcoded', () => {
        let countryCode = ''
        let encuentra1 = false
        let encuentra2 = false
        let encuentra3 = false
        let ExperienceCode = ''
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC1.INPUT2
        }).as('getOneCountry');
        cy.get('@getOneCountry').then(response => {
            expect(response.body.result.Countries.forEach(element => {
                if (element.Code == testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT3) {
                    encuentra1 = true
                    countryCode = element.Code
                    cy.request({
                        method: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT1,
                        url: testCasesPlanningAPIsHighLevelDefinition.TC4.INPUT2
                    }).as('getOneCountry');
                    cy.get('@getOneCountry').then(response => {
                        expect(response.body.result.Options.forEach(element => {
                            if (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT4) {
                                encuentra2 = true
                                ExperienceCode = element.ExperienceCode

                                const requestBody = {
                                    CountryCode : countryCode,
                                    ExperienceCode : ExperienceCode
                                }
                                let encuentra3 = false;
                                cy.request({
                                    method: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT1,
                                    url: testCasesPlanningAPIsHighLevelDefinition.TC5.INPUT2,
                                    body: requestBody                    
                                }).as('getCampaign');
                                cy.get('@getCampaign').then(response => {
                                    expect(response.body.result.Campaigns.forEach(element => {
                                        if ((element.CampaignCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED2) &&
                                        (element.CountryCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED3) &&
                                        (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED4) &&
                                        (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED5) &&
                                        (element.Active == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED6)) {
                                            encuentra3 = true 
                                            cy.log(element.CountryCode)
                                            cy.log(element.CampaignCode)
                                        }
                                    }))
                                    assert.isTrue(encuentra3)
                                    cy.log(JSON.stringify(response.body))
                                    cy.log(encuentra3)
                                })
                


                            }
                        }))
                    })
            
                }
            }))
        })
    })    
}) 