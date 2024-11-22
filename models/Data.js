const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' }, // Relaciona o projeto ao usuário
});

module.exports = mongoose.model('Data', DataSchema);