const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Rota para registrar usuário
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao registrar usuário.' });
    }
});

// Rota para login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas.' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao realizar login.' });
    }
});

module.exports = router;
