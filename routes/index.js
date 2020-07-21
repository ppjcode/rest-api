const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientController');

module.exports = () => {

    router.post('/clients', clientsController.newClient);

    return router;
};

