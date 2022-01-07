const express = require('express');
require('express-async-errors');
const cors = require('cors');
const middleware = require('./utils/middleware');
const authRoutes = require('./routes/auth');
const entryRoutes = require('./routes/entry');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use('/api', authRoutes);
app.use('/api/entries', entryRoutes);

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

module.exports = app;
