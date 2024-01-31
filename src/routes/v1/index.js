const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');
const FlightController=require('../../controllers/flight-controller')
const {FlightMiddleware}=require('../../middlewares/index')
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id', CityController.update);
router.get('/city',CityController.getAll)
router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.deleteAirport);
router.get('/airport',AirportController.getAllAirport);
router.get('/airport/:id',AirportController.getAirport);
router.patch('/airport/:id',AirportController.updateAirport);
router.post('/flights',
                    FlightMiddleware.validateCreateFlight,
                    FlightController.createFlight
                );
router.get('/flight/:id',FlightController.getFlight);
router.get('/cityairports/:id',CityController.getCityAirport);
router.get('/flights',FlightController.getAllFlight);



module.exports = router;