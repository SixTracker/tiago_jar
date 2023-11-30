import Conexao.jdbcTemplate
import com.github.britooo.looca.api.group.temperatura.Temperatura
import java.time.LocalDateTime

class Repositorio {

    var bdInterServer = Conexao.bdInterServer

    fun iniciar(){
    var jdbcTemplate = Conexao.jdbcTemplate
    }

    fun cadastrarTemp(temperatura:Double, data:LocalDateTime){
    val cadastroTemp = jdbcTemplate?.update("""
        insert into registro (valorRegistro, dataRegistro, fkComponente) values
        ('${temperatura}','${data}' , 222);
    """.trimIndent())
    }
}