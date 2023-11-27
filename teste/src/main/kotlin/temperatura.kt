// Main.kt
import javax.swing.JOptionPane

fun temperatura() {
    val py = ApiPython()
    val login = Usuario()
    login.iniciar()

    login.email = JOptionPane.showInputDialog("Digite o seu email:").toString()
    login.senha = JOptionPane.showInputDialog("Digite a sua senha:").toString()

    if (login.validarLogin(login)) {
        JOptionPane.showMessageDialog(null, login.comprimentar(login))
        val fkEmpresa = login.verificarEmpresa(login)
        val listaDeServidor = fkEmpresa?.let { login.mostrarServidor(it) }
        JOptionPane.showConfirmDialog(null, "O monitoramento irá inicializar agora!")
        val idServidor =
            JOptionPane.showInputDialog("Digite o ID do servidor que você deseja monitorar:\n\r $listaDeServidor")
                .toInt()

        val listaDeComponente = login.mostrarComponentes(idServidor)
        val fkComponenteCPU =
            JOptionPane.showInputDialog("Digite o ID do componente de cpu que você deseja monitorar:\n\r $listaDeComponente")
                .toInt()
        py.chamarApiPython(idServidor, fkComponenteCPU)
    }
}
