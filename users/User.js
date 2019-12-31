const Sequelize = require('sequelize');
const connection = require('../database/database');

//Cria o model de usuários:
const User = connection.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//User.sync({force: true});

module.exports = User;