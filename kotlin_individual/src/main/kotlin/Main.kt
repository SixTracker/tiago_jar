import javax.swing.JOptionPane

fun main() {
    val py = ApiPython()
    val login = Usuario()
    login.iniciar()

    login.email = JOptionPane.showInputDialog("Digite o seu email:").toString()
    login.senha = JOptionPane.showInputDialog("Digite a sua senha:").toString()

    if (login.validarLogin(login)) {
        JOptionPane.showMessageDialog(null, login.comprimentar(login))

        val fkEmpresa = login.verificarEmpresa(login)
        val listaDeServidor = fkEmpresa?.let { login.mostrarServidor(it) }

        JOptionPane.showMessageDialog(null, "O monitoramento irá inicializar agora! Pressione OK para continuar.")
        val idServidor = JOptionPane.showInputDialog("Digite o ID do servidor que você deseja monitorar:\n\r $listaDeServidor").toInt()

        val listaDeComponente = login.mostrarComponentes(idServidor)

        val fkComponenteCPU = JOptionPane.showInputDialog("Digite o ID do componente de CPU que você deseja monitorar:\n\r $listaDeComponente").toInt()
        val fkComponenteRAM = JOptionPane.showInputDialog("Digite o ID do componente de RAM que você deseja monitorar:\n\r $listaDeComponente").toInt()

        try {
            py.chamarApiPython(idServidor, fkComponenteCPU, fkComponenteRAM)
        } catch (e: NumberFormatException) {
            JOptionPane.showMessageDialog(null, "Entrada inválida. Certifique-se de inserir números inteiros válidos.")
        }
    }
}
