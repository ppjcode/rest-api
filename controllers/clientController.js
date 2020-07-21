const Clients = require('../models/Clientes');


exports.newClient = async (req, res, next) => {

    const client = new Clients(req.body);
    try {
        const clientNew = await client.save();
        console.log(clientNew);
        res.json({message: 'Succesfully client added'});
    } catch (error) {
        console.log(error);
        next();
    }
}