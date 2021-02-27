require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');



// STARTING APP
const app = express();

// connect to db
try {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });    
    console.log(`Connected to Database`);
} catch (error) {
    console.log(error.message);
}


// mongoose.connect('mongodb://localhost/restapi', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// routes
app.use('/api', routes());

// starting server
app.listen(process.env.API_PORT, () => console.log(`API running in port ${process.env.API_PORT}`));