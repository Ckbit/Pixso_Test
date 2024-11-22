// Seleciona os elementos necessários
const addProjectButton = document.getElementById('addProjectButton');
const overlay = document.getElementById('overlay');
const cancelButton = document.getElementById('cancelButton');
const addProjectForm = document.getElementById('addProjectForm');

// Mostra o overlay ao clicar no botão "Adicionar Projeto"
addProjectButton.addEventListener('click', () => {
    overlay.classList.remove('hidden');
});

// Esconde o overlay ao clicar no botão "Cancelar"
cancelButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Lida com o envio do formulário
addProjectForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const token = localStorage.getItem('authToken'); // Obtém o token JWT

    if (!token) {
        alert('Você precisa estar logado para adicionar um projeto.');
        location.assign('index.html');
        return;
    }

    try {
        // Faz a requisição para adicionar o projeto
        const response = await fetch('http://localhost:5000/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ nome, descricao }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Projeto adicionado com sucesso!');
            overlay.classList.add('hidden'); // Esconde o overlay
            addProjectForm.reset(); // Limpa o formulário
        } else {
            alert(data.message || 'Erro ao adicionar projeto.');
        }
    } catch (error) {
        console.error('Erro ao adicionar projeto:', error);
        alert('Erro ao conectar ao servidor.');
    }
});
