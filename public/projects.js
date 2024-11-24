document.getElementById('addProjectForm').addEventListener('submit', async (event) => {
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
            // Atualiza a lista de projetos
            const projectList = document.getElementById('projectList');
            const item = document.createElement('li');
            item.textContent = `Nome: ${data.project.nome}, Descrição: ${data.project.descricao}`;
            projectList.appendChild(item);
            // Limpa o formulário
            document.getElementById('addProjectForm').reset();
        } else {
            alert(data.message || 'Erro ao adicionar projeto.');
        }
    } catch (error) {
        console.error('Erro ao adicionar projeto:', error);
        alert('Erro ao conectar ao servidor.');
    }
});