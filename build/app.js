'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var reload = require('reload');

var http = require('http');
var server = http.createServer(app);
reload(server, app);

app.get('/', function (req, res) {
  res.send('\n    <script src="/reload/reload.js"></script>\n    ' + _server2.default.renderToString(_react2.default.createElement(_ui2.default, null)) + '\n  ');
});

process.on('SIGUSR2', function () {
  console.log('DOWN', new Date());
});

server.listen(3000, function () {
  console.log('UP', new Date());
});