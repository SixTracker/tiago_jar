var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})


router.get("/tempo-real-Isa/", function (req, res) {
    medidaController.TempoRealIsa(req, res);
})

router.get("/ultimas-kt/", function (req, res) {
    medidaController.buscarUltimaskt(req, res);
});

router.get("/ultimas-kt-temp/", function (req, res) {
    medidaController.buscarsktTemp(req, res);
});

router.get("/media-temp/", function (req, res) {
    medidaController.buscarmedtemp(req, res);
});

router.get("/media-processador/", function (req, res) {
    medidaController.buscarmedproc(req, res);
});

router.get("/ultimas-med/", function (req, res) {
    medidaController.buscarUltimasMed(req, res); // Rafaela 
});  

router.get("/vm/", function (req, res) {
    medidaController.buscarUltimasvm(req, res); // Rafaela 
}); 

router.get("/ramuso/", function (req, res) {
    medidaController.buscarUsoRam(req, res); // Rafaela 
});

router.get("/ramtotal/", function (req, res) {
    medidaController.buscartotalRam(req, res); // Rafaela 
});

router.get("/ultimas-medt2/", function (req, res) {
    medidaController.buscarUltimasMedt2(req, res); // Rafaela - T2
});

router.get("/disponivelt2/", function (req, res) {
    medidaController.buscarTorre2disponivel(req, res); // Rafaela - T2
}); 

router.get("/ramtotalt2/", function (req, res) {
    medidaController.buscarTorre2Total(req, res); // Rafaela - T2
}); 

router.get("/ramemusot2/", function (req, res) {
    medidaController.buscarTorre2Usando(req, res); // Rafaela - T2
}); 

router.get("/tempo-real-bytes/", function (req, res) {
    medidaController.MedidasBytes(req, res);
})

module.exports = router;