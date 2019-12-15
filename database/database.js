//Cria conexão com o banco de dados:
const Sequelize = require('sequelize');

const connection = new Sequelize('engelcad', 'root', '05481202', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;