const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('/Users/sburnette/Documents/testing_keys/key.pem'),
    cert: fs.readFileSync('/Users/sburnette/Documents/testing_keys/server.crt'),
}

const express = require("express")
const session = require("express-session")
const parser = require("body-parser")
const path = require("path")
const helmet = require("helmet")

const app = express()

app.use(parser.json())
app.use(helmet())
app.use(express.static(path.join(__dirname, "/client/dist/client/")))
app.use(express.static(path.join(__dirname, "/static")))

require("./server/config/mongoose")
require("./server/config/routes")(app)

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, './client/dist/client/', 'index.html'));
});


https.createServer(options, app).listen(8000)