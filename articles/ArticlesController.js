const express = require('express');
const router = express.Router();

//Carrega o model de Artigos para executar o comando de save:
const Article = require('./Articles');

router.get('/admin/article/new', (req, res) => {
    res.render('admin/articles/new');
});

router.post('/articles/save', (req, res) => {
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

module.exports = router;