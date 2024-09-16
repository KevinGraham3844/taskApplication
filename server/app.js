const express = (require('express'));
require('express-async-errors');

const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const mongoConnection = require('./utils/mongoConnection');

const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const tasksRouter = require('./controllers/tasks');

mongoConnection.connectToMongo();

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(middleware.requestLogger);

app.get('/', (_req, res) => {
    res.send('<h1>task App api</h1>');
});

app.use(middleware.tokenExtractor);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/tasks', tasksRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
