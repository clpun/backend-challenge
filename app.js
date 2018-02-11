const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const routes = require('./routes');
const { connectToDB } = require('./db');

// Connect to MySql database
connectToDB();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connect all our routes to our application
app.use('/', routes);

// Turn server on
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
