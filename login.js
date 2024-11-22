document.getElementById('loginButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Limpa mensagens de erro
    errorMessage.textContent = '';

    if (!username || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (data.success) {
            // Redireciona para console.html
            location.assign('console.html');
        } else {
            // Exibe mensagem de erro
            errorMessage.textContent = data.message || 'Erro ao realizar login.';
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        errorMessage.textContent = 'Erro ao conectar ao servidor.';
    }
});
