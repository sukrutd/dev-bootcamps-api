const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connecting to the database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');
const users = require('./routes/users');

// Creating an express application
const app = express();

// Body parser middleware
app.use(express.json());

// Cookie parser middleware
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// File uploading middleware
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xssClean());

// Rate limiting
const apiRatelimiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 100
});
app.use('/api/', apiRatelimiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.cyan));

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
	console.log(`Error: ${error.message}`.red);
	// Close server and exit process
	server.close(() => process.exit(1));
});
