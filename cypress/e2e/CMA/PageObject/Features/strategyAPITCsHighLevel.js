export const testCasesStrategyAPIsHighLevelDefinition = {
    TC1 : [
        {
            NAME : 'Verify that status is 200 for process_status',
            INPUT1 : 'GET',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/process_status/',
            INPUT3 : "PE",
            INPUT4 : 202501,
            EXPECTED1 : 200,
            EXPECTED2 : 'PE',
            EXPECTED3 : 202318
        }
    ],
    TC2 : [
        {
            NAME : 'Verify that status is 200 for strategy',
            INPUT1 : 'GET',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/',
            INPUT3 : "PE",
            INPUT4 : 202318,
            INPUT5 : "FE",
            EXPECTED1 : 200,
            EXPECTED2 : "FE"
        }
    ],
    TC3 : [
        {
            NAME : 'Verify that status is 200 for assign',
            INPUT1 : 'PUT',
            INPUT2 : 'http://127.0.0.1:8000/api/assign',
            INPUT3 : "PE",
            INPUT4 : 202318,
            INPUT5 : "FE",
            INPUT6 : "offer_id.csv",
            EXPECTED1 : 200,
            EXPECTED2 : "Assigned"
        }
    ],
    TC4 : [
        {
            NAME : 'Verify that status is 200 for transfer',
            INPUT1 : 'PUT',
            INPUT2 : 'http://127.0.0.1:8000/api/transfer',
            INPUT3 : "PE",
            INPUT4 : 202318,
            INPUT5 : "FE",
            INPUT6 : "TEST",
            EXPECTED1 : 200,
            EXPECTED2 : "Transfer files"
        }
    ],
    TC5 : [
        {
            NAME : 'Verify that status is 200 for process init',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/process/init',
            INPUT3 : "PE",
            INPUT4 : 202318,
            EXPECTED1 : 200,
            EXPECTED2 : "Process started",
            EXPECTED3 : "PE",
            EXPECTED4 : 202318,
        }
    ],
    TC6 : [
        {
            NAME : 'Verify that status is 200 for process callback',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/process/callback',
            INPUT3 : "status",
            INPUT4 : "timestamp",
            INPUT5 : "processId",
            INPUT6 : "message",
            INPUT7 : 0,
            INPUT8 : "pathOutput",
            INPUT9 : "paramName",
            INPUT10 : "value",
            EXPECTED1 : 200
        }
    ],
    TC7 : [
        {
            NAME : 'Verify that status is 200 for process cop init',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/process/cop/cinit',
            INPUT3 : "PE",
            INPUT4 : 202318,
            EXPECTED1 : 200,
            EXPECTED2 : "Process COP Started"
        }
    ],
    TC8 : [
        {
            NAME : 'Verify that status is 200 for process cop callback',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/strategy/process/cop/callback',
            INPUT3 : "PE",
            INPUT4 : 202318,
            INPUT5 : "transacctionID",
            INPUT6 : "actionPolicy",
            INPUT7 : "source",
            INPUT8 : "callback",
            EXPECTED1 : 200
        }   
    ] 
}
