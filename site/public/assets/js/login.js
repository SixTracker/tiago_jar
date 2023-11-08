function entrar() {
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('modal_container');

    var emailVar = inpEmail.value;
    var senhaVar = inpSenha.value;

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1 || senhaVar == '') {
        msgErro.innerHTML = `Email ou senha inválidos.`

        modal_container.classList.add('show');


        close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });
        return
    }


    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                
                sessionStorage.EMAIL_USUARIO = json.Email;
                sessionStorage.NOME_USUARIO = json.Nome_Pessoa;
                sessionStorage.ID_USUARIO = json.idPessoa;
                sessionStorage.fkPerfil = json.fkPerfil
                sessionStorage.fkEmpresa = json.fkEmpresa
                if (sessionStorage.fkPerfil == 2) {
                    setTimeout(function () {
                        window.location = "./Dashboards/dash-nova/dashboardGest.html";
                    }, 1000); // apenas para exibir o loading
                }
                if(sessionStorage.fkPerfil == 3){
                    setTimeout(function () {
                        window.location = "./Dashboards/dash-nova/dashboardTecn.html";
                    }, 1000); // apenas para exibir o loading
                }
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}

function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1Titulo = document.getElementById("h1_titulo");

    if (login != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "./Dashboards/DashboardGeralCPU.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}