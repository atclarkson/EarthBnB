require('dotenv').config();
var cors = require('cors');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const { notFound, errorHandler } = require('../middleware/error.middleware');

const passport = require('passport');
const listingRouter = require('./routes/listing.route');
const favoriteRouter = require('./routes/favorite.route');
const authRouter = require('./routes/auth');

const MongoStore = require('connect-mongo');

const app = express();

app.use('/', express.static('public'));

// CONNECT TO MONGO VIA MONGOOSE
const mongoosePromise = mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((m) => m.connection.getClient())
  .catch((err) => console.log(err));

// Bodyparser middleware, extended true allows nested payloads
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors({ origin: 'http://localhost:3000' }));

// setup the session
app.use(
  session({
    genid: (req) => {
      console.log(req.sessionID);
      return uuidv4();
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 * 2 },
    store: MongoStore.create({
      clientPromise: mongoosePromise,
    }),
  })
);

app.use(cookieParser());
//app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/api/v1/listings', listingRouter);
app.use('/api/v1/favorite', favoriteRouter);
app.use('/api/auth', authRouter);
app.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'WELCOME TO V1 API' });
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
