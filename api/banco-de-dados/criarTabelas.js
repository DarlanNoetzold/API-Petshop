const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')
//chamando a classe que cria a tabela com Promise
ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)