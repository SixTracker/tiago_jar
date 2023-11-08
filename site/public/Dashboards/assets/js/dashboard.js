const btn_agencia1 = document.getElementById("btn_ag1")
const btn_agencia2 = document.getElementById("btn_ag2")
const btn_agencia3 = document.getElementById("btn_ag3")
const btn_agencia4 = document.getElementById("btn_ag4")

function Todos() {

    const grafico1 = document.querySelector("#chartTodos");
    const grafico2 = document.querySelector("#chartCPU");
    const grafico3 = document.querySelector("#chartRAM");
    const grafico4 = document.querySelector("#chartDisco");
    const grafico5 = document.querySelector("#chartNET");


    grafico1.style.display = "block";
    grafico2.style.display = "none";
    grafico3.style.display = "none";
    grafico4.style.display = "none";
    grafico5.style.display = "none";


}

function CPU() {

    const grafico1 = document.querySelector("#chartTodos");
    const grafico2 = document.querySelector("#chartCPU");
    const grafico3 = document.querySelector("#chartRAM");
    const grafico4 = document.querySelector("#chartDisco");
    const grafico5 = document.querySelector("#chartNET");


    grafico1.style.display = "none";
    grafico2.style.display = "block";
    grafico3.style.display = "none";
    grafico4.style.display = "none";
    grafico5.style.display = "none";

}

function RAM() {

    const grafico1 = document.querySelector("#chartTodos");
    const grafico2 = document.querySelector("#chartCPU");
    const grafico3 = document.querySelector("#chartRAM");
    const grafico4 = document.querySelector("#chartDisco");
    const grafico5 = document.querySelector("#chartNET");


    grafico1.style.display = "none";
    grafico2.style.display = "none";
    grafico3.style.display = "block";
    grafico4.style.display = "none";
    grafico5.style.display = "none";

}
function Disco() {

    const grafico1 = document.querySelector("#chartTodos");
    const grafico2 = document.querySelector("#chartCPU");
    const grafico3 = document.querySelector("#chartRAM");
    const grafico4 = document.querySelector("#chartDisco");
    const grafico5 = document.querySelector("#chartNET");


    grafico1.style.display = "none";
    grafico2.style.display = "none";
    grafico3.style.display = "none";
    grafico4.style.display = "block";
    grafico5.style.display = "none";


}

function NET() {

    const grafico1 = document.querySelector("#chartTodos");
    const grafico2 = document.querySelector("#chartCPU");
    const grafico3 = document.querySelector("#chartRAM");
    const grafico4 = document.querySelector("#chartDisco");
    const grafico5 = document.querySelector("#chartNET");


    grafico1.style.display = "none";
    grafico2.style.display = "none";
    grafico3.style.display = "none";
    grafico4.style.display = "none";
    grafico5.style.display = "block";

}