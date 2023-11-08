var medidaModel = require("../models/medidaModel");

// ROTAS ULTIMAS E TEMPO REAL DO PROJETO COMO UM TODO
function buscarUltimasMedidas(req, res) {

    const limite_linhas = 1;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasEmTempoReal(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// MEDIDAS KOTLIN
function buscarUltimaskt(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimaskt(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - ISABELA HANTKE
function TempoRealIsa(req, res){

    const limite_linhas = 1;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.TempoRealIsa(limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - VITOR MACAUBA
function MedidasBytes(req, res) {

    const limite_linhas = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.MedidasBytes( limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - RAFAELA DIAS  ↓↓↓↓↓↓
// VALORES TORRE 1
function buscarUltimasMed(req, res) {

    const limite_linhas = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMed( limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasvm(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUltimasvm().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUsoRam(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarUsoRam().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscartotalRam(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscartotalRam().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// VALORES TORRE 2

function buscarUltimasMedt2(req, res) {

    const limite_linhas = 1;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedt2( limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTorre2Usando(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTorre2Usando().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTorre2disponivel(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTorre2disponivel().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTorre2Total(req, res){

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarTorre2Total().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// ROTAS INDIVIDUAL - RAFAELA DIAS ↑↑↑↑

// ROTAS- INDIVIDUAL VERÔNICA
function buscarsktTemp(req, res) {

    const limite_linhas = 15;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarsktTemp(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarmedtemp(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarmedtemp(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarmedproc(req, res) {

    const limite_linhas = 6;

    var idAquario = req.params.idAquario;
    
    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarmedproc(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimaskt,
    TempoRealIsa,
    buscarUltimasMed, // Rafaela
    buscarUltimasvm, // Rafaela 
    buscarUsoRam, // Rafaela 
    buscartotalRam, // Rafaela 
    buscarUltimasMedt2, // Rafaela - T2
    buscarTorre2Usando, // Rafaela - T2
    buscarTorre2disponivel, // Rafaela - T2
    buscarTorre2Total, // Rafaela - T2
    buscarsktTemp, // Verônica
    buscarmedtemp, // Verônica
    buscarmedproc, // Verônica
    MedidasBytes // Vitor
}