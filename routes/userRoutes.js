const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Rota para criar usuário
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
});

module.exports = router;
