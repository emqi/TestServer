process.env.DEBUG = 'express:*';
const fs = require('fs');
const https = require('http');
const express = require('express');

const app = express();
app.use('/', express.static(__dirname + '/dist/HDP-frontend'));

const server = https.createServer(app);

server.listen(4200);