export const testCasesGanaMasHighLevelDefinition = {
    TC1 : {
        NAME : 'Validate if Iam in GanaMasPage then Gana+ label should be displayed',
        EXPECTED1 : 'Gana +'
    },
    TC2 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC3 : {
        NAME : 'Validate I can go from dropDown menu to GanaMasPage and if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC4 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1',
        INPUT1 : 'Perú',
        INPUT2 : '202501',
        INPUT3 : 'Envio #1'
    },
    TC5 : {
        NAME : 'Validate if Iam in GanaMasPage then I should be able to select Peru and 202501 from dropdown menu and select evento1 and abrir any scenario and validate resultado Label and salir de escenario',
        INPUT1 : 'Perú',
        INPUT2 : '202501',
        INPUT3 : 'Envio #1',
        INPUT4 : '#0 Scenario_2_3',
        INPUT5 : '1',
        EXPECTED1 : '#0 Scenario_2_3',
        EXPECTED2 : 'RESULTADOS KPI'
    },
    TC6 : {
        NAME : 'Validate if Iam in FestivalesPage then I should be able to visit tabs',
        INPUT1 : 'Perú',
        INPUT2 : '202501',
        INPUT3 : 'Envio #1',
        INPUT4 : '#1 Scenario_2_1',
        INPUT5 : '2',
        EXPECTED1 : '#1 Scenario_2_1',
        EXPECTED2 : 'Ingresar Id de ofertas creadas en Planit Evo:',
        EXPECTED3 : 'Eventos'
    }
}