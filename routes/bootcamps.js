const express = require('express');
const Bootcamp = require('../models/Bootcamp');
const { protect, authorize } = require('../middleware/auth');
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

router
	.route('/')
	.get(advancedResults(Bootcamp, 'courses'), getBootcamps)
	.post(protect, authorize('publisher', 'admin'), createBootcamp);

router
	.route('/:id')
	.get(getBootcamp)
	.put(protect, authorize('publisher', 'admin'), updateBootcamp)
	.delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsWithinRadius);

router.route('/:id/photo').put(protect, authorize('publisher', 'admin'), uploadBootcampPhoto);

module.exports = router;
