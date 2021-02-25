const express = require('express');
const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');
const {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp,
	getBootcampsWithinRadius,
	uploadBootcampPhoto
} = require('../controllers/bootcamps');

// Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource router
router.use('/:bootcampId/courses', courseRouter);

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(createBootcamp);

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsWithinRadius);

router.route('/:id/photo').put(uploadBootcampPhoto);

module.exports = router;
