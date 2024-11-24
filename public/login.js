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
            console.log('Login bem-sucedido');
            localStorage.setItem('authToken', data.token); // Salva o token no localStorage
            console.log('Token recebido do servidor:', data.token);
            console.log('Salvando token no localStorage...');
            location.assign('dashboard.html');
        } else {
            // Exibe mensagem de erro
            console.log('Erro de autenticação:', data.message);
            errorMessage.textContent = data.message || 'Erro ao realizar login.';
        }
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        errorMessage.textContent = 'Erro ao conectar ao servidor.';
    }
});
