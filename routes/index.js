const express = require('express');
const router = express.Router();


module.exports = () => {
    router.get('/', (req, res) => {
        res.send(`Test succesfully`);
    });
    router.get('/about', (req, res) => {
        res.send(`About me`);
    });

    return router;
};

