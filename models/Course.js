const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, 'Please add a course title.'],
		maxlength: [50, 'Course title cannot exceed 50 characters.']
	},
	description: {
		type: String,
		required: [true, 'Please add a course description.'],
		maxlength: [500, 'Description cannot exceed 500 characters.']
	},
	weeks: {
		type: String,
		required: [true, 'Please add course duration in weeks']
	},
	tuition: {
		type: Number,
		required: [true, 'Please add a tuition cost']
	},
	minimumSkill: {
		type: String,
		required: [true, 'Please add a minimum skill level'],
		enum: ['beginner', 'intermediate', 'advanced']
	},
	scholarshipAvailable: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	bootcamp: {
		type: mongoose.Schema.ObjectId,
		ref: 'Bootcamp',
		required: true
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true
	}
});

// Static method to get average of course tuitions
CourseSchema.statics.getAverageCost = async function (bootcampId) {
	const result = await this.aggregate([
		{
			$match: { bootcamp: bootcampId }
		},
		{
			$group: {
				_id: '$bootcamp',
				averageCost: { $avg: '$tuition' }
			}
		}
	]);

	try {
		await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
			averageCost: Math.ceil(result[0].averageCost)
		});
	} catch (error) {
		console.error(error);
	}
};

// Call getAverageCost after save
CourseSchema.post('save', function () {
	this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost before remove
CourseSchema.pre('remove', function () {
	this.constructor.getAverageCost(this.bootcamp);
});

module.exports = mongoose.model('Course', CourseSchema);
