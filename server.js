require('dotenv').config(); // Carrega as variáveis do .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);

// Conexão com MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB Atlas');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err);
});

// Exemplo de rota para testar o servidor
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
