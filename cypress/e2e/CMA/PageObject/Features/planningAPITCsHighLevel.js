export const testCasesPlanningAPIsHighLevelDefinition = {
    TC1 : {
        NAME : 'Verify that status is 200',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/countries',
        EXPECTED1 : 200
    },
    TC2 : {
        NAME : 'Verify that status_code is 200 in the body',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/countries',
        EXPECTED1 : 200
    },
    TC3 : {
        NAME : 'Verify that at least one country is in the response',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/countries',
        EXPECTED1 : 200,
        EXPECTED2 : 'PE',
        EXPECTED3 : 'Perú'
    },
    TC4 : {
        NAME : 'Verify that at least one option is in the response',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/options',
        EXPECTED1 : 200,
        EXPECTED2 : 'Gana +',
        EXPECTED3 : 'GME'
    },
    TC5 : {
        NAME : 'Verify that at least one campaign is in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/campaigns',
        INPUT3 : 'PE',
        INPUT4 : 'GME',
        EXPECTED1 : 200,
        EXPECTED2 : '202503',
        EXPECTED3 : "PE",
        EXPECTED4 : 'GME',
        EXPECTED5 : 'Open',
        EXPECTED6 : true
    },
    TC6 : {
        NAME : 'Verify that at least one worksessions is in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/worksessions',
        INPUT3 : 'PE',
        INPUT4 : 'GME',
        INPUT5 : '202503',
        EXPECTED1 : 200,
        EXPECTED2 : 'R',
        EXPECTED3 : "Open",
        EXPECTED4 : 'GME',
        EXPECTED5 : 'Open',
        EXPECTED6 : true
    },
    TC7 : {
        NAME : 'Verify that at least one Scenarios is in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/scenarios',
        INPUT3 : 'PE',
        INPUT4 : 'GME',
        INPUT5 : '202503',
        EXPECTED1 : 200,
        EXPECTED2 : 13,
        EXPECTED3 : 5
    },
    TC8 : {
        NAME : 'Verify that the Scenario provided is in the response',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/scenario/',
        INPUT3 : '5',
        EXPECTED1 : 200,
        EXPECTED2 : 5
    },
    TC9 : {
        NAME : 'Verify that the Scenario provided is in the response',
        INPUT1 : 'GET',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/healthcheck',
        EXPECTED1 : 200,
        EXPECTED2 : 'ok'
    },
    TC10 : {
        NAME : 'Verify that the GetOffers provided statusCode 200 in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/getoffers',
        EXPECTED1 : 200,
        EXPECTED2 : 'OK'
    },
    TC11 : {
        NAME : 'Verify that the saveoffers provided statusCode 200 in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/saveoffers',
        EXPECTED1 : 200,
        EXPECTED2 : 'OK'
    },
    TC12 : {
        NAME : 'Verify that the GetOfferscount provided statusCode 200 in the response',
        INPUT1 : 'POST',
        INPUT2 : 'http://127.0.0.1:8000/api/planning/generic/getofferscount',
        EXPECTED1 : 200,
        EXPECTED2 : 'OK'
    }
}