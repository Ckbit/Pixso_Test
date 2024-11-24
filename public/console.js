document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('authToken'); // Obtém o token armazenado
    if (!token) {
        alert('Você precisa estar logado para acessar esta página.');
        location.assign('index.html'); // Redireciona para a página de login
        return;
    }

    try {
        // Faz a requisição ao backend para buscar os projetos
        const response = await fetch('http://localhost:5000/api/data/projects', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho
            },
        });

        if (!response.ok) {
            // Se o token for inválido ou a sessão expirada
            alert('Sessão expirada ou token inválido. Faça login novamente.');
            localStorage.removeItem('authToken'); // Remove o token inválido
            location.assign('index.html');
            return;
        }

        const projects = await response.json(); // Obtém os dados dos projetos
        console.log('Projetos:', projects);

        // Exibe os projetos na lista
        const projectList = document.getElementById('projectList');
        projects.forEach(project => {
            const item = document.createElement('li');
            item.textContent = `Nome: ${project.nome}, Descrição: ${project.descricao}`;
            projectList.appendChild(item);
        });
    } catch (error) {
        console.error('Erro ao buscar projetos:', error);
        alert('Erro ao carregar os dados.');
    }
});