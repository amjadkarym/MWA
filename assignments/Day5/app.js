var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var axios = require('axios');
const {from} = require('rxjs');
const {map, filter} = require('rxjs/operators');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// instantiations
var app = express();

// view engine setup
// configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('trust proxy', true);
app.set('x-powered-by', false);

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
//app.use('/', indexRouter);
//app.use('/users', usersRouter);


// observables
let obser$ = from(axios.get('https://randomuser.me/api/?results=10'))
.pipe(
  map(n => n.data.results)
)
.subscribe(
  x => {console.log(x);
  }
)

// async await
const getUsersAsync = async () => {
  try {
 return await axios.get('https://randomuser.me/api/?results=10');
  } catch(error) {
  console.error(error);
  }
}

// promise
const getUsersPromise = () => {
  try {
    return axios.get('https://randomuser.me/api/?results=10');
  } catch(error) {
    console.error(error);
  }
}

app.get('/user', (req, res) => {
  getUsersPromise()
  // call getUsersAsync() as well
  .then((response) => {
    res.set({
      'Cache-control': 'private, max-age=86400',
      'Last-Modified': new Date(),
      'Link': `<https://randomuser.me/api/?page=1&results=10>; rel="first",` +
          `<https://randomuser.me/api/?page=${response.data.info.page + 1}&results=10&seed=${response.data.info.seed}>; rel="next",` +
          `<https://randomuser.me/api/?page=${response.data.info.page - 1}&results=10&seed=${response.data.info.seed}>; rel="prev"`
    });
    res.json(response.data.results);
  })
});

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

// bootup
app.listen(1947, function(){
	console.log('server is running');
});
module.exports = app;
