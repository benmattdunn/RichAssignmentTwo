// I 've been building this from scratch for pratice, so I've been lagging behind because of it.
// however it's really important that I do for learning this alot more.


var express = require('express');
//var router = express.Router(); //I assume create the router object, and completely in the wrong place.
var multer = require('multer');
var upload = multer({dest: 'uploads/'}); //still getting this to run, but closer then before.


var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');




// partials setup.
// Express setup variables.
var index = require('./routes/index');
var users = require('./routes/users');

//route to business setup/information, I have thought of this as the following setup.
//user account is tied to the business, so users can have multiple submitted business.
//but business cannot have multiple users. (many to one). (as I have decided to link
//this to services in regards to programming, I'm only going to use github.
var business = require ('./routes/business');

//link using mongoose to connect to the database, pretty much regurgitated, but now I understand it.
var config = require('./config/globalVars');
var mongoose = require('mongoose');
mongoose.connect(config.db); //uses the config file to connect to the DB using the globalVars.

var app = express();

//will use the github login strategy for for the login. As

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);



// left in for general developement.
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
