const mongoose = require('mongoose');
const logger = require('./logger');
const config = require('./config');


const connectToMongo = async () => {
    mongoose.set('strictQuery', false);

    logger.info('connecting to', config.MONGODB_URI);
    try {
        mongoose.connect(config.MONGODB_URI);
        logger.info('connected to MongoDB');
    } catch (error) {
        logger.error('error connectiong to mongoDB: ', error.message);
    }
};

module.exports = {
    connectToMongo
}