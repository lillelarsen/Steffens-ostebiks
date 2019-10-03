// Product model
const mongoose = require('mongoose');
const Product = require('../schemas/Product');

// hvad hedder modellen, og hvilket schema skal den bruge
module.exports = mongoose.model('Product', Product);