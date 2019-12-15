const express = require('express');
const app = express();
const connection = require('./database/database');

//Conecta ao banco:
connection.authenticate().then(() => {
    console.log('Conexão com banco de dados bem sucedida.')
}).catch((err) => {
    console.log('Erro ao conectar ao banco: ' + err)
});

app.listen(3000, () => console.log('Servidor em execução.'))