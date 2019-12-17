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

//Rota para excluir um artigo:
router.post('/admin/article/delete', (req, res) => {
    let id = req.body.id;
    if((id != undefined) && (!isNaN(id))){
        Article.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/admin/articles');
        })
    }else{
        res.send('Erro ao excluir artigo');
    };
});

//Rota para carregar os artigos cadastrados para usuários não autenticados:
router.get('/articles', (req, res) => {
    Article.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((articles) => {
        res.render('article', {articles: articles});
    });
});

//Rota para carregar os artigos para usuários autenticados:
router.get('/admin/articles', (req, res) => {
    Article.findAll({
        order: [
            ['createdAt', 'DESC']
        ]
    }).then((articles) => {
        res.render('admin/articles/article', {articles: articles});
    });
})

module.exports = router;