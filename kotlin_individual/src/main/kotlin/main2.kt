import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime
import javax.swing.JOptionPane


fun main() {
    var repositorio = Repositorio()
    val login = Usuario()
    login.iniciar()
    var data = LocalDateTime.now()

    login.email = JOptionPane.showInputDialog("Digite o seu email:").toString()
    login.senha = JOptionPane.showInputDialog("Digite a sua senha:").toString()

    if (login.validarLogin(login)) {
        JOptionPane.showMessageDialog(null, login.comprimentar(login))

        val fkEmpresa = login.verificarEmpresa(login)
        val listaDeServidor = fkEmpresa?.let { login.mostrarServidor(it) }

        while (true) {

            var escolha = JOptionPane.showInputDialog("""
                Escolha o que fazer:
                1- Monitorar a Temperatura CPU
                2 - Sair
                            
                     """.trimIndent())
            if(escolha == "2"){
                break
            } else if(escolha == "1"){
                JOptionPane.showMessageDialog(null, "O monitoramento irá inicializar agora! Pressione OK para continuar.")
                val idServidor =
                    JOptionPane.showInputDialog("Digite o ID do servidor que você deseja monitorar:\n\r $listaDeServidor")
                        .toInt()

                val listaDeComponente = login.mostrarComponentes(idServidor)

                val fkComponenteCPU =
                    JOptionPane.showInputDialog("Digite o ID do componente de CPU que você deseja monitorar:\n\r $listaDeComponente")
                        .toInt()
                // criando instância do Looca


                val looca = Looca()

                // criação do gerenciador de temperatura
                val temperatura = looca.temperatura.temperatura

                println(temperatura)
                println(data)
                repositorio.cadastrarTemp(temperatura, data)

                println("Temperatura da CPU (ºC):  $temperatura")

                println()
            }
        }
    }
}

