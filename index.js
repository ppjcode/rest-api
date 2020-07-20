const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

// starting app
const app = express();

// mongodb conecction
mongoose.connect('mongodb://localhost/restapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



// routes
app.use('/', routes());



// starting server
app.listen(5000, () => {
    console.log(`Server started on port`);
});