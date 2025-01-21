export const testCasesPlanningFESAPIsHighLevelDefinition = {
    TC1 : [
        {
            NAME : 'Verify that status is 200 for level groups',
            INPUT1 : 'GET',
            INPUT2 : 'http://127.0.0.1:8000/api/planning/festival/levelgroups/',
            INPUT3 : 123,
            INPUT4 : true,
            EXPECTED1 : 501,
            EXPECTED2 : 'relation \"planning.consultantgroup\" does not exist'
        },
        {
            NAME : 'Verify that status is 501 for level groups',
            INPUT1 : 'GET',
            INPUT2 : 'http://127.0.0.1:8000/api/planning/festival/levelgroups/',
            INPUT3 : 123,
            INPUT4 : true,
            EXPECTED1 : 200,
            EXPECTED2 : 'Completed'
        }
    ],
    TC2 : [
        {
            NAME : 'Verify that status is 200 for uploadConsultant',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/uploadConsultant',
            INPUT3 : "consultant_id.csv",
            INPUT4 : 123,
            INPUT5 : true,
            EXPECTED1 : 200,
            EXPECTED2 : 'Assigned'
        },
        {
            NAME : 'Verify that status is 200 for uploadConsultant',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/uploadConsultant',
            INPUT3 : "consultant_id.csv",
            INPUT4 : 123,
            INPUT5 : true,
            EXPECTED1 : 200,
            EXPECTED2 : 'Assigned'
        }
    ],
    TC3 : [
        {
            NAME : 'Verify that status is 200 for consultantGroups',
            INPUT1 : 'GET',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/consultagroups/',
            INPUT3 : 123,
            EXPECTED1 : 200,
            EXPECTED2 : 'Completed'
        }
    ],
    TC4 : [
        {
            NAME : 'Verify that status is 200 for resetConsultants',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/resetConsultants/',
            INPUT3 : 123,
            EXPECTED1 : 200,
            EXPECTED2 : 'Complete',
            EXPECTED3 : true
        }
    ],
    TC5 : [
        {
            NAME : 'Verify that status is 200 for festival configuration',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/festivalconfiguration/',
            INPUT3 : 123,
            EXPECTED1 : 200,
            EXPECTED2 : 'Complete',
            EXPECTED3 : "festivalConfiguration"
        }
    ],
    TC6 : [
        {
            NAME : 'Verify that status is 200 for save level groups',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/savelevelgroups',
            INPUT3 : 123,
            INPUT4 : 0,
            INPUT5 : 0,
            EXPECTED1 : 200,
            EXPECTED2 : 'Complete',
            EXPECTED3 : true
        }
    ],
    TC7 : [
        {
            NAME : 'Verify that status is 200 for save levels',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/savelevels',
            INPUT3 : 123,
            INPUT4 : 0,
            EXPECTED1 : 200,
            EXPECTED2 : 'Complete',
            EXPECTED3 : true
        }
    ],
    TC8 : [
        {
            NAME : 'Verify that status is 200 for send level algorithm',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/sendlevelalgorithm',
            EXPECTED1 : 200
        }
    ],
    TC9 : [
        {
            NAME : 'Verify that status is 200 for supported',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/supported',
            INPUT3 : 'PE',
            INPUT4 : 202318,
            EXPECTED1 : 200,
            EXPECTED2 : 'Complete',
            EXPECTED3 : 'result'
        }
    ],
    TC10 : [
        {
            NAME : 'Verify that status is 200 for assistedConsultantType',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/assistedConsultantType',
            INPUT3 : 123,
            INPUT4 : 456,
            EXPECTED1 : 200,
            EXPECTED2 : 'Completed',
            EXPECTED3 : true
        }
    ],
    TC11 : [
        {
            NAME : 'Verify that status is 200 for download consultant',
            INPUT1 : 'POST',
            INPUT2 : 'http://127.0.0.1:8000/api/plannig/festival/downloadConsultant',
            INPUT3 : 123,
            EXPECTED1 : 200
        }
    ]
}
