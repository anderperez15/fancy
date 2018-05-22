var express = require('express');
var app = express();
var index = require('./app/routes/index');
var horario = require('./app/routes/horario');
require('./app/config/server')(app, express);

app.use('/', index);
app.get('/horarios/:materias', horario);
