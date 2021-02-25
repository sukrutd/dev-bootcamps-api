const mongoose = require('mongoose');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});

	console.log(`MongoDB connected: ${conn.connection.host}`.underline.blue);
};

module.exports = connectDB;
