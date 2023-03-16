const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

const mongooseURI = process.env.MONGO_URI;

mongoose.set('strictQuery', true)

const connectToMongo = () => {
    mongoose.connect(mongooseURI)
    console.log('connected to mongoDB')
}

module.exports = connectToMongo