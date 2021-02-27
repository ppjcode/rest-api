const Clients = require('../models/Clients');

// SHOW ALL CLIENTS
exports.showClients = async (req, res, next) => {

    try {
        const clients = await Clients.find({});
        res.json(clients);
    } catch (error) {
        console.log(error);
        next();
    }
}


// SHOW ONE CLIENT
exports.showClient = async (req, res, next) => {

    try {
        const client = await Clients.findById(req.params.id);
        if (!client) {
            res.json('Client does not exist');
            next();
        }
        res.json(client);
    } catch (error) {
        console.log(error);
        next();
    }
}

// CREATE ONE CLIENT
exports.newClient = async (req, res, next) => {

    const client = new Clients(req.body);
    try {
        await client.save();
        res.json({message: 'Succesfully client added'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// UPDATE ONE CLIENT
exports.updateClient = async (req, res,next) => {
    try {
        const client = await Clients.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true});
        res.json(client);
    } catch (error) {
        console.log(error);
        next();
    }
}

// DELETE ONE CLIENT
exports.deleteClient = async (req, res, next) => {
    try {
        await Clients.findOneAndDelete({_id: req.params.id});
        res.json('The client has been deleted');
    } catch (error) {
        console.log(error);
        next();
    }
}