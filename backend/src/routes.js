const express = require('express')
const routes = express.Router()

const userController = require('./controllers/userControllers')
// const eventController = require('./controllers/eventControllers')
const Auth = require('./middlewares/Authentication.js');

// USUÁRIO
routes.get('/user', userController.indexController);
//erro na autenticacao da visualizacao privada do get com id
routes.get('/user/:id', Auth,  userController.readOneController);
routes.post('/user', userController.createController);
routes.put('/user/:id', Auth, userController.updateController);
routes.delete('/user/:id', Auth, userController.deleteController);
routes.post('/user/login', userController.loginController);


//EVENTO
// routes.get('/events/:id', eventController.index);
// routes.post('/events', eventController.create);
// routes.put('/events/:id', eventController.update);
// routes.delete('/events/:id', eventController.delete);
    
module.exports = routes