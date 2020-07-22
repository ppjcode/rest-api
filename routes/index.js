const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientController');
const productsController = require('../controllers/productsController');
const ordersController = require('../controllers/ordersController');

module.exports = () => {

    /** CLIENTS */

    // create client
    router.post('/clients', clientsController.newClient);

    // show all clients
    router.get('/clients', clientsController.showClients);

    // show one client
    router.get('/clients/:id', clientsController.showClient);

    // update one client
    router.put('/clients/:id', clientsController.updateClient);

    // delete one client
    router.delete('/clients/:id', clientsController.deleteClient);

    /** PRODUCTS */

    // create product
    router.post('/products',
        productsController.uploadFile,
        productsController.createProduct
    );

    // show all products
    router.get('/products', productsController.showProducts);

    // show one product
    router.get('/products/:id', productsController.showProduct);

    // update one product
    router.put('/products/:id',
        productsController.uploadFile,
        productsController.updateProduct
    );

    // delete one product
    router.delete('/products/:id', productsController.deleteProduct);

    /* ORDERS */

    // create a order
    router.post('/orders', ordersController.newOrder);

    // show all orders
    router.get('/orders', ordersController.showOrders);

    // show one order
    router.get('/orders/:id', ordersController.showOrder);

    // update one order
    router.put('/orders/:id', ordersController.updateOrder);

    // delete one order
    router.delete('/orders/:id', ordersController.deleteOrder);

    return router;
};

