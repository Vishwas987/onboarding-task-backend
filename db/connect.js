const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url);
}

// mongoose.connect(connectionString)
//     .then(() => console.log('Connected to DB...'))
//     .catch((err) => console.log(err));

module.exports = connectDB;
