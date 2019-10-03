const mongoose = require('mongoose');

module.exports = async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017/steffens_ostebiks', {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.info('connected to DB');
    } catch (error) {
        console.log(`connection to DB failed, error: ${error}`);
    }
}