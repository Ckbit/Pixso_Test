const express = require('express');
const Data = require('../models/Data');
const router = express.Router();

// Rota para adicionar dados à tabela
router.post('/', async (req, res) => {
    const { nome, idade, cidade } = req.body;
    try {
        const newData = new Data({ nome, idade, cidade });
        await newData.save();
        res.status(201).json({ message: 'Dados adicionados com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao adicionar dados.' });
    }
});

// Rota para listar os dados
router.get('/', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
});

module.exports = router;
