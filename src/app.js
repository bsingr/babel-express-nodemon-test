import express from 'express'
const app = express()
import UI from './ui'
import ReactDOM from 'react-dom/server'
import React from 'react';
var reload = require('reload')

var http = require('http')
var server = http.createServer(app)
reload(server, app)

app.get('/', function (req, res) {
  res.send(`
    <script src="/reload/reload.js"></script>
    ${ReactDOM.renderToString(<UI />)}
  `)
})

process.on('SIGUSR2', function() {
  console.log('DOWN', new Date())
});

server.listen(3000, () => {
  console.log('UP', new Date())
})
