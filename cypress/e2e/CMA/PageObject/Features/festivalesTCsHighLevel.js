export const testCasesFestivalesHighLevelDefinition = {
    TC1 : {
        NAME : 'Validate if Iam in FestivalesPage then Festivales label should be displayed',
        EXPECTED1 : 'Festivales'
    },
    TC2 : {
        NAME : 'Validate if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC3 : {
        NAME : 'Validate I can go from dropDown menu to FestivalesPage and if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu',
        INPUT1 : 'Perú',
        INPUT2 : '202501'
    },
    TC4 : {
        NAME : 'Validate if Iam in FestivalesPage then I should be able to select Peru and 202501 from dropdown menu and select evento1',
        INPUT1 : 'Perú',
        INPUT2 : '202503',
        INPUT3 : 'Envio #1'
    },
    TC5 : {
        NAME : 'Validate if Iam in FestivalesPage then I should be able to visit tabs',
        INPUT1 : 'Perú',
        INPUT2 : '202503',
        INPUT3 : 'Envio #1',
        INPUT4 : '#0 Scenario_26_3',
        INPUT5 : '1',
        EXPECTED1 : '#0 Scenario_26_3',
        EXPECTED2 : 'Ingresar Id de ofertas creadas en Planit Evo:',
        EXPECTED3 : 'Carga Manual',
        EXPECTED4 : 'Niveles por grupo'
    },
    TC6 : {
        NAME : 'Validate if Iam in FestivalesPage then I should be able to visit CargaPremios tab and validate headers',
        INPUT1 : 'Perú',
        INPUT2 : '202503',
        INPUT3 : 'Envio #1',
        INPUT4 : '#0 Scenario_26_3',
        INPUT5 : '1',
        EXPECTED1 : '#0 Scenario_26_3',
        EXPECTED2 : 'Ingresar Id de ofertas creadas en Planit Evo:',
        EXPECTED3 : 'ID Oferta',
        EXPECTED4 : 'Descripción',
        EXPECTED5 : 'Precio',
        EXPECTED6 : 'Comentario',
        EXPECTED7 : 'Medio de venta',
        EXPECTED8 : 'Alcance',
        EXPECTED9 : 'Flag activo'

    }
}