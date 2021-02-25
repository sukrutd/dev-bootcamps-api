const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

const Bootcamp = require('./models/Bootcamp');
const Course = require('./models/Course');

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/data/bootcamps.json`));
const courses = JSON.parse(fs.readFileSync(`${__dirname}/data/courses.json`));

// Import data into DB
const importData = async () => {
	try {
		await Bootcamp.create(bootcamps);
		await Course.create(courses);
		console.log('Data imported successfully...'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(error);
	}
};

// Delete data from DB
const deleteData = async () => {
	try {
		await Bootcamp.deleteMany();
		await Course.deleteMany();
		console.log('Data destroyed successfully...'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(error);
	}
};

if (process.argv[2] === '-i') {
	importData();
} else if (process.argv[2] === '-d') {
	deleteData();
}
