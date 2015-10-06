// npm modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// what's going on here?
var debug = require('debug')('photoalbums');

// the routes 
var routes = require('./routes/index');
var users = require('./routes/users');
var photos = require('./routes/photos');
var albums = require('./routes/albums');

// global object
var globals = require('./lib/globals');

// mysql
var mysql = require('mysql');

// init express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// register the routes
app.use('/', routes);
app.use('/users', users);
app.use('/photos', photos);
app.use('/albums', albums);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;                   
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render({
            message: err.message,
            error: err
        });
    }); 
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', globals.applicationPort);

var server = app.listen(app.get('port'), function() {
    
    debug('Express server listening on port ' + server.address().port);
    var connection = mysql.createConnection(globals.database);
    connection.connect(function(err) {
        if (err) {
            console.log('error connecting to database:');
        } else {
            console.log('connected to database!');
        }
    }); 
});