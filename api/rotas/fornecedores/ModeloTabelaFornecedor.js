const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

//Criação das tableas do Banco
const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

//cria a tabela fornecedor conforme a coluna e as opções através da conexão "instancia"
module.exports = instancia.define('fornecedor', colunas, opcoes)