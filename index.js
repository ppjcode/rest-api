const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');


// starting app
const app = express();

// connect to db
mongoose.connect('mongodb://localhost/restapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// routes
app.use('/', routes());

// starting server
app.listen(5000, () => console.log(`Server started on port`));