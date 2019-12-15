const express = require('express');
const router = express.Router();

router.get('/portfolio', (req, res) => {
    res.render('portfolio.ejs');
});

module.exports = router;