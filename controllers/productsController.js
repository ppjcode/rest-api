const Products = require('../models/Productos');
const multer = require('multer');
const shortid = require('shortid');

const multerConfig = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter (req, file, cb) {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        }else {
            cb(new Error('Invalid format'), false);
        }
    },
}

const upload = multer(multerConfig).single('image');

// upload file
exports.uploadFile = (req, res, next) => {
    console.log(req.file);
    upload(req, res, function (error) {
        if (error) {
            res.json({message: error.message});
            console.log(error.message)
        }
        return next();
    })
}

// create new product
exports.createProduct = async (req, res, next) => {
    const product = new Products(req.body);
    try {
        if (req.file.filename) {
            product.image = req.file.filename;
        }
        await product.save();
        res.json({message: 'Product added succesfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// show all products
exports.showProducts = async (req, res, next) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        next();
    }
}

// show one product
exports.showProduct = async (req, res, next) => {
    try {
        const product = await Products.findById({_id: req.params.id});
        res.json(product);
    } catch (error) {
        console.log(error);
        next();
    }
}

// update one product
exports.updateProduct = async (req, res, next) => {

    let newProduct = req.body;

    if (req.file) {
        newProduct.image = req.file.filename;
    }else{
        let oldProduct = await Products.findById(req.params.id);
        newProduct.image = oldProduct.image;
    }

    try {
        const product = await Products.findOneAndUpdate({_id: req.params.id}, newProduct, {new: true});
        res.json(product);
    } catch (error) {
        console.log(error);
        next();
    }
}

// delete one product
exports.deleteProduct = async (req, res, next) => {
    try {
        await Products.findByIdAndDelete({_id: req.params.id});
        res.json('The product has been deleted');
    } catch (error) {
        console.log(error);
        next();
    }
}