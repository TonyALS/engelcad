const express = require('express');
const router = express.Router();

//Carrega o model de Artigos para executar o comando de save:
const Article = require('./Articles');

//Rota da página de criação de novo artigo:
router.get('/admin/article/new', (req, res) => {
    res.render('admin/articles/new');
});

//Rota post para salvar um novo artigo:
router.post('/admin/article/save', (req, res) => {
    let title = req.body.title;
    let body = req.body.body;

    //Salvando artigo:
    Article.create({
        title: title,
        body: body
    }).then(() => {
        res.send('Artigo salvo')
    });
});

//Rota para carregar os artigos cadastrados:
router.get('/articles', (req, res) => {
    Article.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((articles) => {
        res.render('article', {articles: articles});
    });
});

module.exports = router;