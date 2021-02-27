const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');
const productsController = require('../controllers/productsController');
const ordersController = require('../controllers/ordersController');

module.exports = () => {

    
    /***************** 
     **** CLIENTS **** 
     *****************/

    // SHOW ALL CLIENTS
    router.get('/clients', clientsController.showClients);

    // SHOW ONE CLIENT
    router.get('/clients/:id', clientsController.showClient);

    // CREATE CLIENT
    router.post('/clients', clientsController.newClient);

    // UPDATE ONE CLIENT
    router.put('/clients/:id', clientsController.updateClient);

    // DELETE ONE CLIENT
    router.delete('/clients/:id', clientsController.deleteClient);



    /***************** 
     *** PRODUCTS ***
     *****************/

    // CREATE PRODUCT
    // router.post('/products',
    //     productsController.uploadFile,
    //     productsController.createProduct
    // );

    // SHOW ALL PRODUCTS
    // router.get('/products', productsController.showProducts);

    // show one product
    // router.get('/products/:id', productsController.showProduct);

    // update one product
    // router.put('/products/:id',
    //     productsController.uploadFile,
    //     productsController.updateProduct
    // );

    // delete one product
    // router.delete('/products/:id', productsController.deleteProduct);

    /* ORDERS */

    // create a order
    // router.post('/orders', ordersController.newOrder);

    // show all orders
    // router.get('/orders', ordersController.showOrders);

    // show one order
    // router.get('/orders/:id', ordersController.showOrder);

    // update one order
    // router.put('/orders/:id', ordersController.updateOrder);

    // delete one order
    // router.delete('/orders/:id', ordersController.deleteOrder);

    return router;
};

