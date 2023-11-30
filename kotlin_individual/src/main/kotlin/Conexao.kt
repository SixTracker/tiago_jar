import org.apache.commons.dbcp2.BasicDataSource
import org.springframework.jdbc.core.JdbcTemplate

object Conexao {

    var jdbcTemplate: JdbcTemplate? = null
        get() {
            if (field == null){
                val dataSource = BasicDataSource()
                dataSource.driverClassName = "com.mysql.cj.jdbc.Driver"
                dataSource.url= "jdbc:mysql://localhost:3306/sixtracker"
                dataSource.username = "root"
                dataSource.password = "271815"
                val novoJdbcTemplate = JdbcTemplate(dataSource)
                field = novoJdbcTemplate
            }
            return  field
        }

    var bdInterServer: JdbcTemplate? = null
        get() {
            if (field == null) {
                val dataSoruceServer = BasicDataSource()
                dataSoruceServer.url = "jdbc:sqlserver://54.146.1.25;databaseName=sixtracker;encrypt=false";
                dataSoruceServer.driverClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver"
                dataSoruceServer.username = "sa"
                dataSoruceServer.password = "Sixtracker@"
                bdInterServer = JdbcTemplate(dataSoruceServer)
            }
            return field
        }

}
