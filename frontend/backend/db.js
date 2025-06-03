const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=Mongo%20Compass&directConnection=true&ssl=false"

async function connectToMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/xpertone');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToMongo;