const express = require('express');
const multer = require('multer');

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const uploadConfig =require('./config/upload')
const upload = multer(uploadConfig);

routes.get('/status', (req, res) => {
    res.send({ status: 200 });
})

//LoginController

//ApprovalController
//RejectionsController
//SubscriberController


//dashboard
routes.get('/dashboard', DashboardController.getAllEvents);
routes.get('/events/:sport', DashboardController.getAllSportsEvents);
routes.get('/dashboard/:eventId', DashboardController.getEventById);

//Event
routes.delete('/event/:eventId', EventController.delete);
routes.post('/event', upload.single("thumbnail"), EventController.createEvent);

//User
routes.post('/user/register', UserController.createUser);
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;