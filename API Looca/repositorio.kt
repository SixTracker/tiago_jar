import org.springframework.jdbc.core.JdbcTemplate

class repositorio {

    lateinit var jdbctemplate:JdbcTemplate

    fun iniciar(){
        jdbctemplate = Conexao.jdbcTemplate!!
    }

    fun servidor():Int{
        val servidor = jdbctemplate.queryForObject("""
           SELECT idServidor FROM servidor WHERE apelido = 'Servidor1'
        """,Int::class.java)
        return servidor
    }
    fun banco():Int{
        val banco = jdbctemplate.queryForObject("""
            SELECT idBanco FROM banco WHERE nomeFantasia = 'Banco A'
        """,Int::class.java)
        return banco
    }
    fun especificacoes():Int{
        val espec = jdbctemplate.queryForObject("""
            SELECT idEspecificacoes FROM especificacoes WHERE idEspecificacoes = 1
        """,Int::class.java)
        return espec
    }
    fun plano():Int{
        val plano = jdbctemplate.queryForObject("""
           SELECT idPlano FROM planoContratado WHERE tipo = 1 
        """,Int::class.java)
        return plano
    }

    fun locacao():Int{
        val locacao = jdbctemplate.queryForObject("""
           SELECT idLocacao FROM locacao WHERE idLocacao = 1 
        """,Int::class.java)
        return locacao
    }

    fun metrica():Int{
        val metrica = jdbctemplate.queryForObject("""
           SELECT idMetrica FROM metrica WHERE idMetrica = 1 
        """,Int::class.java)
        return metrica
    }
    fun cadastrarComp(fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkLocacao:Int,fkMetrica:Int){
        jdbctemplate.execute("""
           insert into componentes values
            (null,'Temperatura CPU','Temperatura',$fkServidor,$fkBanco,$fkEspec,$fkPlano,$fkLocacao,$fkMetrica)
        """)
    }
    fun getIdTemp():Int{
        val idTemp = jdbctemplate.queryForObject("""
           select min(idComponentes) from componentes where nome = "Temperatura CPU" 
        """,Int::class.java)
        return idTemp
    }

    fun add(novaTemp:Temperatura,fkServidor:Int,fkBanco:Int,fkEspec:Int,fkPlano:Int,fkComponente:Int,fkLocacao:Int,fkMetrica: Int){
        jdbctemplate.execute("""
            insert into registros values (null,'${novaTemp.dtHora}','${novaTemp.dado}',$fkServidor,$fkBanco,$fkEspec,$fkPlano,$fkComponente,$fkLocacao,$fkMetrica)
        """)
    }
}