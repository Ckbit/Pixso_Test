const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    cidade: String,
});

module.exports = mongoose.model('Data', DataSchema);
