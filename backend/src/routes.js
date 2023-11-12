const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userControllers');
const eventController = require('./controllers/eventControllers');
// const eventController = require('./controllers/eventControllers')
const Auth = require('./middlewares/Authentication.js');

// USUÁRIO
routes.get('/user', userController.indexController);
routes.get('/user/:id', Auth,  userController.readOneController);
routes.post('/user', userController.createController);
routes.put('/user/:id', Auth, userController.updateController);
routes.delete('/user/:id', Auth, userController.deleteController);
routes.post('/user/login', userController.loginController);


//EVENTO
routes.get('/events', eventController.indexController)
routes.get('/events/:id', eventController.readOneController);
routes.get('/events/user/:id', eventController.readbyUserController);
routes.post('/events/:id', eventController.createController);
routes.put('/events/:id', eventController.updateController);
routes.delete('/events/:id', eventController.deleteController);
    
module.exports = routes