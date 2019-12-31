const express = require('express');
const app = express();
const connection = require('./database/database');
const bodyParser = require('body-parser');

//Models:
const Article = require('./articles/Articles');
const User = require('./users/User');

//Rota página about:
const aboutController = require('./about/AboutController');

//Rota página portfólio:
const portfolioController = require('./portfolio/PortfolioController');

//Rota página de contato:
const contactController = require('./contact/ContactController');

//Rota para página de novo artigo:
const articlesController = require('./articles/ArticlesController');

//Rota página de criar usuário:
const usersController = require('./users/UsersController');

//Carrega view engine:
app.set('view engine', 'ejs');

//Configurar o express para trabalhar com arquivos estáticos:
app.use(express.static('public'));

//Configure body-parser:
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conecta ao banco:
connection.authenticate().then(() => {
    console.log('Conexão com banco de dados bem sucedida.')
}).catch((err) => {
    console.log('Erro ao conectar ao banco: ' + err)
});

app.use('/', aboutController);
app.use('/', portfolioController);
app.use('/', contactController);
app.use('/', articlesController);
app.use('/', usersController);

app.get('/', (req, res) => {
    res.render('index.ejs')
})








app.listen(3000, () => console.log('Servidor em execução.'))