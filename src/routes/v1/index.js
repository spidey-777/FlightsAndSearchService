const express = require('express');
const CityController = require('../../controllers/city_controller');
const AirportController = require('../../controllers/airport_controller');
const FlightController = require('../../controllers/flight_controller');

//middleware
const {FlightMiddleware} = require('../../middleware/index')

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router .get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

//for airport by cityId
router.get('/city/airport/:id',CityController.getAirport);


//for airport
router.post('/airport', AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport/:id',AirportController.get);
router .get('/airport',AirportController.getAll);
router.patch('/airport/:id',AirportController.update);

//for flights
router.post('/flight',
    FlightMiddleware.validateCreateFlight,
    FlightController.create);
router.get('/fight/:id',FlightController.get);
router.get('/flight', FlightController.getAll); 






module.exports = router;
