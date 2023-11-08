var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 5 * 
                        FROM [dbo].[Leitura] 
                            ORDER BY DataHora DESC`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT * 
                                FROM Leitura 
                                    ORDER BY DataHora DESC LIMIT 7;`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
            SELECT TOP 5 * 
                FROM [dbo].[Leitura] 
                    ORDER BY DataHora DESC
    
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT * 
                            FROM Leitura 
                                ORDER BY DataHora DESC LIMIT 7;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimaskt(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 5 processador, dataHora
                        FROM [dbo].[LeituraKotlin] 
                            ORDER BY DataHora DESC;
        `

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarsktTemp(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT TOP 10 temperatura, FORMAT(dataHora, 'dd/MM/yyyy HH:ss') as 'dataHora', processador
                                FROM [dbo].[LeituraKotlin];
        `

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarmedtemp(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(temperatura) AS mediaTemp FROM [dbo].[LeituraKotlin];`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarmedproc(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(processador) AS mediaPorc FROM [dbo].[LeituraKotlin];`

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

            instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// ROTAS INDIVIDUAIS - ISABELA HANTKE

function TempoRealIsa(limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 5 UsoDiscoR, LivreDiscoR, DiscoRTotal, PorcentUsoRam, PercentDiscoR, DataHora FROM [dbo].[Leitura] ORDER BY DataHora DESC;`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT UsoDiscoR, LivreDiscoR, DiscoRTotal, PorcentUsoRam FROM Leitura ORDER BY DataHora`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// ROTAS INDIVIDUAL - RAFAELA DIAS ↓↓↓↓↓
// SELECT PARA CAPTURA DE DADOS DE RAM USADA E DISPONÍVEL >>>>>> DASHBOARD - T1 <<<<<<<
function buscarUltimasMed() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql =`SELECT TOP 10 RamEmUso, RamAvailable, convert(varchar, Hora_Now, 108) AS horaRam FROM [dbo].[Leitura_Ram] WHERE fkTorre = 6 and fkEmpresa = 7 ORDER BY Data_Now DESC;`

        // SELECT TOP 10 RamEmUso, RamAvailable, Hora_Now, convert(varchar, Hora_Now, 108) AS horaRam FROM [dbo].[Leitura_Ram] JOIN [dbo].[Empresa] ON fkTorre = 5 ORDER BY horaRam DESC;
    
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

// SELECT PARA CONSULTAR USO DE MEMÓRIA VIRTUAL DISPONÍVEL
function buscarUltimasvm() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamAvailable) AS RamAvailable FROM [dbo].[Leitura_Ram] WHERE fkTorre = 6 and fkEmpresa = 7;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// SELECT PARA CONSULTAR RAM EM USO
function buscarUsoRam() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamEmUso) AS RamEmUso FROM [dbo].[Leitura_Ram] WHERE fkTorre = 6 and fkEmpresa = 7;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// SELECT PARA CONSULTAR TOTAL DE RAM  
function buscartotalRam() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamTotal) AS RamTotal FROM [dbo].[Leitura_Ram] WHERE fkTorre = 6 and fkEmpresa = 7;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// SELECT PARA CAPTURA DE DADOS DE RAM USADA E DISPONÍVEL  >>>>>> DASHBOARD - T2 <<<<<<<
function buscarUltimasMedt2() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql =`SELECT TOP 10 RamEmUso, RamAvailable, convert(varchar, Hora_Now, 108) AS horaRam FROM [dbo].[Leitura_Ram] WHERE fkTorre = 5 and fkEmpresa = 5 ORDER BY Data_Now DESC;`

        // SELECT TOP 10 RamEmUso, RamAvailable, Hora_Now, convert(varchar, Hora_Now, 108) AS horaRam FROM [dbo].[Leitura_Ram] JOIN [dbo].[Empresa] ON fkTorre = 5 ORDER BY horaRam DESC;
    
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}
// SELECT PARA CONSULTAR RAM DISPONÍVEL - T2
function buscarTorre2disponivel() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamAvailable) AS RamAvailable FROM [dbo].[Leitura_Ram] WHERE fkTorre = 5 and fkEmpresa = 5;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
// SELECT PARA CONSULTAR RAM TOTAL - T2
function buscarTorre2Total() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamTotal) AS RamTotal FROM [dbo].[Leitura_Ram] WHERE fkTorre = 5 and fkEmpresa = 5;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// SELECT PARA CONSULTAR RAM EM USO - T2
function buscarTorre2Usando() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql =`SELECT AVG(RamEmUso) AS RamEmUso FROM [dbo].[Leitura_Ram] WHERE fkTorre = 5 and fkEmpresa = 5;`
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        instrucaoSql = `SELECT vMem, DataHora FROM Leitura ORDER BY DataHora DESC LIMIT ${limite_linhas};`

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// ROTAS INDIVIDUAL - RAFAELA DIAS ↑↑↑↑↑

function MedidasBytes() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT TOP 5 BytesEnv, BytesRec, dataHora FROM [dbo].[Leitura] ORDER BY dataHora DESC;`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT BytesEnv, BytesRec, dataHora FROM Leitura ORDER BY dataHora`;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // buscarDadosMaquina,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaskt,
    TempoRealIsa,
    buscarsktTemp, // Verônica
    buscarmedtemp, // Verônica
    buscarmedproc, // Verônica
    buscarUltimasMed, // Rafaela
    buscarUltimasvm, // Rafaela 
    buscarUsoRam, // Rafaela 
    buscartotalRam, // Rafaela
    buscarUltimasMedt2, // Rafaela - T2
    buscarTorre2Usando, // Rafaela - T2
    buscarTorre2disponivel, // Rafaela - T2
    buscarTorre2Total, // Rafaela - T2
    MedidasBytes // Vitor
}