const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
const session = require('express-session');

// Routers
const indexRoute = require('./routes/index');
const registerRoute = require('./routes/registration');
const userRoute = require('./routes/user');
const subscribeRoute = require('./routes/subscribe');
const searchFlightRoute = require('./routes/searchFlight');
const dataRoute = require('./routes/data');

// Template engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// URL encoding for POST requests
app.use(express.urlencoded({ extended: true }));

// Session management
app.use(session({
  secret: 'your_secret_key', // Change this to a secure secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Routing
app.get('/', indexRoute);
app.post('/register', registerRoute);
app.use('/user', userRoute);
app.post('/subscribe', subscribeRoute);
app.post('/search_flight', searchFlightRoute);
app.use('/data', dataRoute);

// Middleware - Static pages rendering
app.use((req, res, next) => {
  try {
      res.render(url.parse(req.url, true).pathname.substring(1), { userId: req.session.userId });
  } catch (error) {
      const err = new Error('Error rendering the page');
      err.status = 500;
      return next(err);
  }
});

// Middleware - Error handling
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).render('error', {
    title: `Error ${statusCode}`,
    statusCode: statusCode,
    message: err.message || 'Something went wrong. Please try again later.'
  });
});

// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
