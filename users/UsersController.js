const express = require('express');
const router = express.Router();
const User = require('./User');
const bcrypt = require('bcryptjs')

router.get('/admin/users/create', (req, res) => {
    res.render('admin/users/create');
});

router.post('/users/create', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    //Verificar se o email já está cadastrado:
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (user == undefined) {
            //Gera um adicional (sal) para o hash de senha:
            let salt = bcrypt.genSaltSync(10);

            //Gera o hash de senha e salva na variável hash:
            let hash = bcrypt.hashSync(password, salt);

            //Salva o usuário no banco:
            User.create({
                name: name,
                email: email,
                password: hash
            }).then(() => {
                res.redirect('/');
            }).catch(err => {
                console.log(err);
            });
        }else{
            res.send('Usuário já cadastrado.')
        };
    });
});

module.exports = router;