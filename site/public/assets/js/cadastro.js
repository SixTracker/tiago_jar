// function cadastrar() {
//     const modal_container = document.getElementById('modal_container');
//     const close = document.getElementById('modal_container');
//     var nomeVar = inpNome.value;
//     var emailVar = inpEmail.value;
//     var senhaVar = inpSenha.value;
//     var conSenhaVar = inpConSenha.value;

//     if (nomeVar == "" || emailVar == "" || senhaVar == "" || conSenhaVar == "") {
//         msgErro.innerHTML = `Preencha todos os campos para prosseguir.`

//         modal_container.classList.add('show');

//         close.addEventListener('click', () => {
//             modal_container.classList.remove('show');
//         });
//         return
//     }


//     if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
//         msgErro.innerHTML = `<br>Email inválido.`

//         modal_container.classList.add('show');


//         close.addEventListener('click', () => {
//             modal_container.classList.remove('show');
//         });
//         return
//     }

//     if (senhaVar != conSenhaVar) {
//         msgErro.innerHTML = `As senhas não coincidem.`

//         modal_container.classList.add('show');


//         close.addEventListener('click', () => {
//             modal_container.classList.remove('show');
//         });
//         return
//     }

//     msgErro.innerHTML = `Cadastro relizado com sucesso.`
//     subMsg.innerHTML = `Por favor aguarde você esta sendo direcionado para tela de login!`

//     modal_container.classList.add('show');


//     close.addEventListener('click', () => {
//         modal_container.classList.remove('show');
//     });


//     setTimeout(() => red(), 3000);


//     function red() {
//         window.location.href = "./Login.html"
//     }

// }


function cadastrarDev() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    let nomeVar = inpNome.value;
    let emailVar = inpEmail.value;
    let senhaVar = inpSenha.value;		
    let fkVar = inpfk.value;
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            fkServer: fkVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            alert(`Cadastro de ${nomeVar} realizado com sucesso!`)
        }

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });
    
    setTimeout(() => red(), 2000);
    
    return false;

    function red() {
        window.location.href = "./Login.html"
    }
}

function exibirModalFuncionario(id) {

    modal_container2.classList.add('show');    
    document.getElementById('botao_sim').setAttribute('name', id) 
}

function deletarFuncionario(id) {

    fetch("/usuarios/deletarFuncionario", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            "idUsuarioServer":id
        })
    }).then(function (resposta) {
    
        console.log("resposta: ", resposta);
    
        if (resposta.ok) {

            modal_container2.classList.remove('show');    
            exibeFuncionario()

        }
    
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    
    });
}

function exibeFuncionario() {

    const tbody = document.querySelector("#tbody_func")
    tbody.innerHTML = '';

    fetch("/usuarios/listar", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json()
        .then(data => {
          console.log(data);



          for (let i in data) {

            let tr_func = document.createElement("tr")
            let nome = data[i].Nome_Pessoa
            let tipo = ''

            if (data[i].fkPerfil == 2) {

                tipo = 'Supervisor'
            }
            else {

                tipo = 'Funcionário'
                nome += `&nbsp; &nbsp;<i style="cursor:pointer" onclick="exibirModalFuncionario(this.id)" id="${data[i].idPessoa}" class="fa-solid fa-trash"></i>`
            }


            tr_func.innerHTML = `
              <td id="nomeFunc">
                ${nome}
              </td>
              <td id="emailFunc">
                ${data[i].Email}
              </td>
              <td>
                ${tipo}
              <td>

              
            `
              
            tbody.appendChild(tr_func);
            
          }
        })

    })
  }


function cadastrarFuncionario() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    let nomeVar = inpNome.value;
    let emailVar = inpEmail.value;
    let senhaVar = inpSenha.value;		
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrarFuncionario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        })
    }).then(function (resposta) {
    
        console.log("resposta: ", resposta);
    
        if (resposta.ok) {
            alert(`Cadastro de ${nomeVar} realizado com sucesso!`)
            exibeFuncionario()
        }
    
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    
    });
    
    return false;
    }

    function cadastrarEmpresa() {
        //Recupere o valor da nova input pelo nome do id
        // Agora vá para o método fetch logo abaixo
        let nomeEmpVar = nomeEmpresa.value;
        let emailEmpVar = emailEmpresa.value;
        let cnpjVar = cnpjEmpresa.value;		
        // Enviando o valor da nova input
        fetch("/usuarios/cadastrarEmpresa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeEmpServer: nomeEmpVar,
                emailEmpServer: emailEmpVar,
                cnpjServer: cnpjVar,
            })
        }).then(function (resposta) {
    
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
    
                alert(`Cadastro de ${nomeVar} realizado com sucesso!`)
            }
    
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
    
        });
    
        return false;
    }

    // function exibirModalFuncionario(id) {
    
    //     modal_container2.classList.add('show');    
    //     document.getElementById('botao_sim').setAttribute('name', id) 
    // }