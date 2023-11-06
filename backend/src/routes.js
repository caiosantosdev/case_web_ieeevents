const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userControllers')
// const eventController = require('./controllers/eventControllers')

// USUÁRIO
routes.get('/user', userController.index);
routes.get('/user/:id', userController.readOne);
routes.post('/user', userController.create);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);
routes.post('/user/login', userController.login);


//EVENTO
// routes.get('/events/:id', eventController.index);
// routes.post('/events', eventController.create);
// routes.put('/events/:id', eventController.update);
// routes.delete('/events/:id', eventController.delete);
    
module.exports = routes