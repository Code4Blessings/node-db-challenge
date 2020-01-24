const express = require('express');
const helmet = require('helmet');

const server = express();

const projectsRouter = require('../projects/projects-router');
const resourcesRouter = require('../resources/resources-router');
const tasksRouter = require('../tasks/tasks-router');


server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send({
        Greeting: "Greetings from Project Data!!!"
    })
})

function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
}

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;
