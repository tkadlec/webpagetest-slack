const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const routes = require('./routes/api_route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'The app is running...'})
})

app.use('/api', routes);

module.exports = serverless(app);