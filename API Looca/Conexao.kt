import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate


object Conexao {
    var jdbcTemplate: JdbcTemplate? = null
        get(){
            if (field ==  null){
                val dataSource = BasicDataSource()
                dataSource.driverClassName = "com.mysql.cj.jdbc.Driver"
                val serverName = "localhost"
                val dataBase = "SecurityBank"
                dataSource.url = "jdbc:mysql://$serverName/$dataBase"
                dataSource.username = "root"
                dataSource.password = "rootpassword"
                val jdbcTemplate = JdbcTemplate(dataSource)
                field = jdbcTemplate
            }
            return field
        }
}