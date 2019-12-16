const Sequelize = require('sequelize');
const connection = require('../database/database');

//Cria o model de Artigos:
const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNUll: false
    }
});

//Executa a criação do model de Artigos:
//Article.sync({force: true}); - Só executa na primeira vez para criar a tabela no banco.

module.exports = Article;