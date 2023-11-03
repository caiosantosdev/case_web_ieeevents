const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userController')
const eventController = require('./controllers/eventController')

routes
    // USUÁRIO
    .get('/user/:id?', userController.index)
    .post('/user', userController.create)
    .put('/user/:id', userController.update)
    .delete('/user/:id', userController.delete)

    //EVENTO
    .get('/events/:id?', eventController.index)
    .post('/events', eventController.create)
    .put('/events/:id', eventController.update)
    .delete('/events/:id', eventController.delete)
    
module.exports = routes