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
  
    it(testCasesPlanningAPIsHighLevelDefinition.TC6.NAME, () => {
        let countryCode = ''
        let encuentra1 = false
        let encuentra2 = false
        let encuentra3 = false
        let ExperienceCode = ''
        let CampaignCode = ''
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
                                            CampaignCode = element.CampaignCode
                                            const requestBody1 = {
                                                CountryCode : countryCode,
                                                ExperienceCode : ExperienceCode,
                                                CampaignCode : CampaignCode
                                            }
                                            let encuentra4 = false;
                                            cy.request({
                                                method: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT1,
                                                url: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT2,
                                                body: requestBody1                    
                                            }).as('getWorkSession');
                                            cy.get('@getWorkSession').then(response => {
                                                expect(response.body.result.WorkSessions.forEach(element => {
                                                    if ((element.Type == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED2) &&
                                                    (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED3) ) {
                                                        encuentra4 = true 
                                                        cy.log(element.CountryCode)
                                                        cy.log(element.CampaignCode)
                                                        cy.log(element.ExperienceCode)
                                                        cy.log(element.Id)
                                                    }
                                                }))
                                                assert.isTrue(encuentra4)
                                                cy.log(JSON.stringify(response.body))
                                                cy.log(encuentra4)
                                            })                       
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
    
    it(testCasesPlanningAPIsHighLevelDefinition.TC7.NAME, () => {
        let countryCode = ''
        let encuentra1 = false
        let encuentra2 = false
        let encuentra3 = false
        let encuentra5 = false;
        let ExperienceCode = ''
        let CampaignCode = ''
        let WorkSessionId = ''
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
                                            CampaignCode = element.CampaignCode
                                            const requestBody1 = {
                                                CountryCode : countryCode,
                                                ExperienceCode : ExperienceCode,
                                                CampaignCode : CampaignCode
                                            }
                                            let encuentra4 = false;
                                            cy.request({
                                                method: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT1,
                                                url: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT2,
                                                body: requestBody1                    
                                            }).as('getWorkSession');
                                            cy.get('@getWorkSession').then(response => {
                                                expect(response.body.result.WorkSessions.forEach(element => {
                                                    if ((element.Type == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED2) &&
                                                    (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED3) ) {
                                                        encuentra4 = true 
                                                        cy.log(element.CountryCode)
                                                        cy.log(element.CampaignCode)
                                                        cy.log(element.ExperienceCode)
                                                        WorkSessionId = element.Id
                                                        const requestBody2 = {
                                                            WorkSessionId : WorkSessionId
                                                        }
                                                        encuentra5 = false;
                                                        cy.request({
                                                            method: testCasesPlanningAPIsHighLevelDefinition.TC7.INPUT1,
                                                            url: testCasesPlanningAPIsHighLevelDefinition.TC7.INPUT2,
                                                            body: requestBody2                    
                                                        }).as('getScenarios');
                                                        cy.get('@getScenarios').then(response => {
                                                            expect(response.body.result.Scenarios.forEach(element => {
                                                                cy.log(JSON.stringify(response.body))
                                                                if ((element.Id == testCasesPlanningAPIsHighLevelDefinition.TC7.EXPECTED2) &&
                                                                (element.WorkSessionId == testCasesPlanningAPIsHighLevelDefinition.TC7.EXPECTED3) ) {
                                                                    encuentra5 = true 
                                                                    cy.log(element.Id)
                                                                    cy.log(element.WorkSessionId)
                                                                    cy.log(element.Name)
                                                                }
                                                            }))
                                                            assert.isTrue(encuentra5)
                                                            cy.log(JSON.stringify(response.body))
                                                            cy.log(encuentra4)
                                                        })                                  
                                                    }
                                                }))
                                                assert.isTrue(encuentra4)
                                                cy.log(JSON.stringify(response.body))
                                                cy.log(encuentra5)
                                            })                       
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

    it(testCasesPlanningAPIsHighLevelDefinition.TC8.NAME, () => {
        let countryCode = ''
        let encuentra1 = false
        let encuentra2 = false
        let encuentra3 = false
        let encuentra5 = false
        let ExperienceCode = ''
        let CampaignCode = ''
        let WorkSessionId = ''
        let Scenario = ''
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
                                            CampaignCode = element.CampaignCode
                                            const requestBody1 = {
                                                CountryCode : countryCode,
                                                ExperienceCode : ExperienceCode,
                                                CampaignCode : CampaignCode
                                            }
                                            let encuentra4 = false;
                                            cy.request({
                                                method: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT1,
                                                url: testCasesPlanningAPIsHighLevelDefinition.TC6.INPUT2,
                                                body: requestBody1                    
                                            }).as('getWorkSession');
                                            cy.get('@getWorkSession').then(response => {
                                                expect(response.body.result.WorkSessions.forEach(element => {
                                                    if ((element.Type == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED2) &&
                                                    (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC6.EXPECTED3) ) {
                                                        encuentra4 = true 
                                                        cy.log(element.CountryCode)
                                                        cy.log(element.CampaignCode)
                                                        cy.log(element.ExperienceCode)
                                                        WorkSessionId = element.Id
                                                        const requestBody2 = {
                                                            WorkSessionId : WorkSessionId
                                                        }
                                                        encuentra5 = false;
                                                        cy.request({
                                                            method: testCasesPlanningAPIsHighLevelDefinition.TC7.INPUT1,
                                                            url: testCasesPlanningAPIsHighLevelDefinition.TC7.INPUT2,
                                                            body: requestBody2                    
                                                        }).as('getScenarios');
                                                        cy.get('@getScenarios').then(response => {
                                                            expect(response.body.result.Scenarios.forEach(element => {
                                                                cy.log(JSON.stringify(response.body))
                                                                if ((element.Id == testCasesPlanningAPIsHighLevelDefinition.TC7.EXPECTED2) &&
                                                                (element.WorkSessionId == testCasesPlanningAPIsHighLevelDefinition.TC7.EXPECTED3) ) {
                                                                    encuentra5 = true 
                                                                    cy.log(element.Id)
                                                                    cy.log(element.WorkSessionId)
                                                                    cy.log(element.Name)
                                                                    WorkSessionId = element.WorkSessionId
                                                                    cy.request({
                                                                        method: testCasesPlanningAPIsHighLevelDefinition.TC8.INPUT1,
                                                                        url: testCasesPlanningAPIsHighLevelDefinition.TC8.INPUT2+WorkSessionId       
                                                                    }).as('getScenario');
                                                                    cy.get('@getScenario').then(response => {
                                                                        expect(response.body.result.Scenario.Id).eq(testCasesPlanningAPIsHighLevelDefinition.TC8.EXPECTED2)
                                                                    })                                  
                                                                }
                                                            }))
                                                            assert.isTrue(encuentra5)
                                                            cy.log(JSON.stringify(response.body))
                                                            cy.log(encuentra5)
                                                        })                                  
                                                    }
                                                }))
                                                assert.isTrue(encuentra4)
                                                cy.log(JSON.stringify(response.body))
                                                cy.log(encuentra4)
                                            })                       
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

    it(testCasesPlanningAPIsHighLevelDefinition.TC9.NAME, () => {
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC9.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC9.INPUT2
        }).as('getStatus');
        cy.get('@getStatus').then(response => {
            expect(response.status).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC9.EXPECTED1)
            expect(response.body.status).eq(testCasesPlanningAPIsHighLevelDefinition.TC9.EXPECTED2)
            cy.log(JSON.stringify(response.body))
        })
    })


    it(testCasesPlanningAPIsHighLevelDefinition.TC10.NAME, () => {
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

                                            const requestBody = {
                                                country : countryCode,
                                                period : 202318,
                                                experience : ExperienceCode,
                                                scenarioId : 69
                                            }
                                            let encuentra4 = false;
                                            cy.request({
                                                method: testCasesPlanningAPIsHighLevelDefinition.TC10.INPUT1,
                                                url: testCasesPlanningAPIsHighLevelDefinition.TC10.INPUT2,
                                                body: requestBody                    
                                            }).as('getOfertas');
                                            cy.get('@getOfertas').then(response => {
 /*                                               expect(response.body.result.offers.forEach(element => {
                                                    if ((element.CampaignCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED2) &&
                                                    (element.CountryCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED3) &&
                                                    (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED4) &&
                                                    (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED5) &&
                                                    (element.Active == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED6)) {
                                                        encuentra4 = true 
                                                        cy.log(element.CountryCode)
                                                        cy.log(element.CampaignCode)
                                                    }
                                                }))*/
                                                    expect(response.status).to.eq(200)
                                                    expect(response.body.status_code).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC10.EXPECTED1)
                                                    expect(response.body.status_name).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC10.EXPECTED2)

 /*                                               assert.isTrue(encuentra3)
                                                cy.log(JSON.stringify(response.body))
                                                cy.log(encuentra3)*/
                                            })
            
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

    
    it(testCasesPlanningAPIsHighLevelDefinition.TC11.NAME, () => {
        const requestBody1 = {
            ScenarioId : 0,
            ScenarioOffers : ['alejo']
        }
        cy.request({
            method: testCasesPlanningAPIsHighLevelDefinition.TC11.INPUT1,
            url: testCasesPlanningAPIsHighLevelDefinition.TC11.INPUT2,
            body: requestBody1
        }).as('getSaveOffer');
        cy.get('@getSaveOffer').then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.status_code).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC11.EXPECTED1)
            expect(response.body.status_name).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC11.EXPECTED2)                                                                
        })      
    })
    

    it(testCasesPlanningAPIsHighLevelDefinition.TC12.NAME, () => {
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
                                            const requestBody = {
                                                country : countryCode,
                                                period : 202318,
                                                experience : ExperienceCode,
                                                scenarioId : 69
                                            }
                                            let encuentra4 = false;
                                            cy.request({
                                                method: testCasesPlanningAPIsHighLevelDefinition.TC12.INPUT1,
                                                url: testCasesPlanningAPIsHighLevelDefinition.TC12.INPUT2,
                                                body: requestBody                    
                                            }).as('getOfertas');
                                            cy.get('@getOfertas').then(response => {
 /*                                               expect(response.body.result.offers.forEach(element => {
                                                    if ((element.CampaignCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED2) &&
                                                    (element.CountryCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED3) &&
                                                    (element.ExperienceCode == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED4) &&
                                                    (element.Status == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED5) &&
                                                    (element.Active == testCasesPlanningAPIsHighLevelDefinition.TC5.EXPECTED6)) {
                                                        encuentra4 = true 
                                                        cy.log(element.CountryCode)
                                                        cy.log(element.CampaignCode)
                                                    }
                                                }))*/
                                                    expect(response.status).to.eq(200)
                                                    expect(response.body.status_code).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC12.EXPECTED1)
                                                    expect(response.body.status_name).to.eq(testCasesPlanningAPIsHighLevelDefinition.TC12.EXPECTED2)

 /*                                               assert.isTrue(encuentra3)
                                                cy.log(JSON.stringify(response.body))
                                                cy.log(encuentra3)*/
                                            })           
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