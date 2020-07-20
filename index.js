const express = require('express');
const routes = require('./routes');

// starting app
const app = express();


// routes
app.use('/', routes());



// starting server
app.listen(5000, () => {
    console.log(`Server started on port`);
});