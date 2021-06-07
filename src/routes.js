const express = require('express');
const multer = require('multer');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');

const uploadConfig =require('./config/upload')
const upload = multer(uploadConfig);

routes.get('/status', (req, res) => {
    res.send({ status: 200 });
})

routes.post('/event', upload.single(thumbnail), EventController.createEvent)
routes.post('/user/register', UserController.createUser);
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;