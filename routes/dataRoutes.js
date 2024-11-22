const express = require('express');
const Data = require('../models/Data'); // Certifique-se de que este caminho está correto
const { authenticateToken } = require('./userRoutes'); // Importa o middleware

const router = express.Router();

// Rota para criar um projeto associado ao usuário autenticado
router.post('/', authenticateToken, async (req, res) => {
    const { nome, descricao } = req.body;
    const userId = req.user.id;

    try {
        const newProject = new Data({ nome, descricao, userId });
        await newProject.save();
        res.status(201).json({ message: 'Projeto criado com sucesso!' });
    } catch (err) {
        console.error('Erro ao criar projeto:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Rota para buscar projetos do usuário autenticado
router.get('/projects', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const projects = await Data.find({ userId }); // Filtra pelos projetos do usuário
        res.status(200).json(projects);
    } catch (err) {
        console.error('Erro ao buscar projetos:', err);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

module.exports = router;
