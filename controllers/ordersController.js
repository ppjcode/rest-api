const Orders = require('../models/Orders');

// create a order
exports.newOrder = async (req, res,next) => {
    const order = new Orders(req.body);

    try {
        await order.save();
        res.json({message: 'New order created sucessfully'});
        console.log('order add');
    } catch (error) {
        console.log(error);
        next();
    }
}

// show all orders
exports.showOrders = async (req, res, next) => {
    try {
        const orders = await Orders.find({}).populate('client').populate({
            path: 'order.product',
            model: 'Products'
        });
        res.json(orders);
    } catch (error) {
        console.log(error);
        next();
    }
}

// show one order
exports.showOrder = async (req, res, next) => {
    try {
        const order = await Orders.findById({_id: req.params.id}).populate('client').populate({
            path: 'order.product',
            model: 'Products'
        })
        if (!order) {
            res.json({message: "That order does not exist"});
            next();
        }
        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
}

// update one order
exports.updateOrder = async (req, res, next) => {
    try {
        const order = await Orders.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.json(order);
    } catch (error) {
        console.log(error);
        next();
    }
}

// delete one order
exports.deleteOrder = async (req, res, next) => {
    try {
        await Orders.findByIdAndDelete({_id: req.params.id});
        res.json({message: 'The order has been removed'});
    } catch (error) {
        console.log(error);
        next();
    }
}