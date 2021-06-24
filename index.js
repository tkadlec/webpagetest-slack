const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api_route.js');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'The app is running...'})
})

app.use('/api', routes);
let server = http.createServer(app);
server.listen(PORT,()=>{
    console.log('Express server running on port '+PORT)
})
module.exports = app;