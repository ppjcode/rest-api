const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    business: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    }
});
