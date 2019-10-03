// Schema fil
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Opret et schema (kan fylde hvad som helst i hvis vi ikke definere struktur)
const Product = new Schema({
    name: { type: String },
    description: { type: String },
    photo: { type: String },
    price: { type: Number }
});

module.exports = Product;