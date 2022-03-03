const TabelaFornecedor = require('./TabelaFornecedor')

class Fornecedor {
    //para conseguirmos pegar os dados na hora de iniciar a classe e assimilar a nossa instância, temos que criar um método na nossa classe, chamado constructor e esse método vai construir a nossa classe.
    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id 
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao 
        this.dataAtualizacao = dataAtualizacao 
        this.versao = versao 
    }

    //Nesse método, temos que nos comunicar com o banco de dados para pegarmos as informações e persistir.
    async criar () {
        //inserir os dados no banco de dados
        const resultado = await TabelaFornecedor.inserir({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao 
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao

    }
}

module.exports = Fornecedor