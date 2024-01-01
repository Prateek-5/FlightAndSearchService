const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.get('/city/:id',CityController.getCity);
router.post('/city',CityController.createCity);
router.get('/city',CityController.getAllCity);
router.patch('/city',CityController.updateCity);
router.delete('/city/:id',CityController.deleteCity);





module.exports = router;
