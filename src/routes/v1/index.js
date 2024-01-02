const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');

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

module.exports = router;