export const testCasesGanaMasHighLevelDefinition = {
    TC1 : {
        NAME : 'Validate if Iam in GanaMasPage then Gana+ label should be displayed',
        EXPECTED1 : 'Gana +'
    },
    TC2 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu'
    },
    TC3 : {
        NAME : 'Validate I can go from dropDown menu to GanaMasPage and if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu'
    },
    TC4 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1'
    },
    TC5 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1 and abrir any scenario and validate resultado Label and salir de escenario',
        EXPECTED1 : '#0 Scenario_2_3',
        EXPECTED2 : 'RESULTADOS KPI'
    }
}