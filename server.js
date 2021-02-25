const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileupload = require('express-fileupload');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connecting to the database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

// Creating an express application
const app = express();

// Body parser middleware
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// File uploading middleware
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(
	port,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.cyan)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
	console.log(`Error: ${error.message}`.red);
	// Close server and exit process
	server.close(() => process.exit(1));
});