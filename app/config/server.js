var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = (app, express) => {
  var server = http.createServer(app);
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')))
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../../public')));
  server.listen(process.env.PORT || 3030, function () {
    console.log('conectado');
  });
}
