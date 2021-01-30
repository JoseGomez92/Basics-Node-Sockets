const express = require('express');
const http = require('http')
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;


//Configure Http (Default Server HTTP Node) with express
let server = http.createServer(app)


//Middleware to serve public resources
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


//Load socket and configure this with server (http default node)
require('./sockets/socket')(server)


//Start up server
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Server listen in ${ port }`);
});