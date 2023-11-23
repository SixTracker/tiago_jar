import com.github.britooo.looca.api.core.Looca
import java.time.LocalDateTime

fun main() {
        while(true) {
                val repositorio = repositorio()
                repositorio.iniciar()

                val looca = Looca()
                val temperatura = looca.temperatura.temperatura
                println("Temp (°C): $temperatura")

                val novaTemp = Temperatura()
                novaTemp.dado = temperatura
                novaTemp.dtHora = LocalDateTime.now()

                val fkServidor = repositorio.servidor()
                val fkBanco = repositorio.banco()
                val fkEspec = repositorio.especificacoes()
                val fkPlano = repositorio.plano()
                val fkLocacao = repositorio.locacao()
                val fkMetrica = repositorio.metrica()

                repositorio.cadastrarComp(fkServidor,fkBanco,fkEspec,fkPlano,fkLocacao,fkMetrica)

                val fkComponente = repositorio.getIdTemp()
                repositorio.add(novaTemp,fkServidor,fkBanco,fkEspec,fkPlano,fkComponente,fkLocacao,fkMetrica)

                Thread.sleep(5000)
        }
}