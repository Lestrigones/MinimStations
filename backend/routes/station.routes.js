const express = require('express');
const router = express.Router();

const station = require('../controllers/station');
const bike = require('../controllers/bike');

router.get('/stations', station.getStations);
router.get('/station/get/:id', station.getStation);
router.post('/station/create', station.createStation);
router.put('/station/bike/add/:id', station.addBike);
router.put('/station/bike/delete/:id', station.deleteBike);
router.delete('/station/delete/:id', station.deleteStation);

router.get('/bikes/all', bike.getAllBikes);
router.get('/bikes/unassigned', bike.getUnassignedBikes);
router.post('/bike', bike.createBike);
router.delete('/bike/delete/:id', bike.deleteBike);



module.exports = router;