export const testCasesODDsHighLevelDefinition = {
    TC1 : {
        NAME : 'Validate if Iam in ODDPage then ODD label should be displayed',
        EXPECTED1 : 'ODD'
    },
    TC2 : {
        NAME : 'Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC3 : {
        NAME : 'Validate I can go from dropDown menu to ODDPage and if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC4 : {
        NAME : 'Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu and select evento1',
        INPUT1 : 'Perú',
        INPUT2 : '202501',
        INPUT3 : 'Envio #1'
    },
    TC5 : {
        NAME : 'Validate if Iam in ODDPage then I should be able to select Peru and 202501 from dropdown menu and select evento1 and abrir any scenario and validate resultado Label and salir de escenario',
        INPUT1 : 'Perú',
        INPUT2 : '202501',
        INPUT3 : 'Envio #1',
        INPUT4 : '#0 Scenario_18_3',
        INPUT5 : '1',
        EXPECTED1 : '#0 Scenario_18_3',
        EXPECTED2 : 'RESULTADOS KPI'
    }
}