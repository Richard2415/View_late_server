const express = require('express');
require('express-async-errors');
const cors = require('cors');
const middleware = require('./utils/middleware');
const authRoutes = require('./routes/auth');
const entryRoutes = require('./routes/entry');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', (req, res) => {
    res.json("server started")
});
app.use('/api/entries', entryRoutes);

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);


module.exports = app;
