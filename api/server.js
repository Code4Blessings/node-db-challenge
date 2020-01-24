const express = require('express');

const projectsRouter = require('../projects/projects-router')
const resourcesRouter = require('../reources/resources-router')

const server = express();

server.use(express.json());

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
server.use('/api/resources', resourcesRouter)

module.exports = server;
