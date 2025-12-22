const mongoose = require('mongoose')

// mongoose.connect()

exports.connectDb = async () => {
    try {
        const data = await mongoose.connect('mongodb://127.0.0.1:27017/mini-ecommerce');
        console.log('Db connect')
    } catch (err) {
        console.log('Error connect db');

    }
}