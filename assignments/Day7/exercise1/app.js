var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var crypto = require('crypto');
var MongoClient = require('mongodb').MongoClient;
var client = new MongoClient('mongodb://localhost:27017');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var secretRouter = require('./routes/secret');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

let secretMsg;
client.connect(function(err) {
  const db = client.db('labs');
  const collection = db.collection('homework7');
  const query = {};
  collection.findOne(query, {projection: {_id : 0}}, function(err, doc) {
    secretMsg = decrypt(doc.message);
    console.log(decrypt(doc.message));
  });
 console.dir('Done');
});

function decrypt(text){
  var key = "asaadsaad";
  var decipher = crypto.createDecipher('aes-256-cbc', key);
  var decrypted = decipher.update(text, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');

  return decrypted;
}

app.use(function(req, res, next){
  req.msg = secretMsg;
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/secret', secretRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
client.close();
app.listen(1947);
module.exports = app;
