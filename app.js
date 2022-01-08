const express = require('express');
require('express-async-errors');
const cors = require('cors');
const middleware = require('./utils/middleware');
const authRoutes = require('./routes/auth');
const entryRoutes = require('./routes/entry');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/entries', entryRoutes);

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '/client/build', 'index.html'));
});

module.exports = app;
