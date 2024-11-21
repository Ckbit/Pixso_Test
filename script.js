// Seleciona o elemento do console
const consoleElement = document.getElementById('console');

// Função para adicionar mensagens ao console
function logToConsole(message) {
    consoleElement.textContent += message + '\n';
    consoleElement.scrollTop = consoleElement.scrollHeight; // Rola automaticamente para o final
}

// Exemplo de uso
logToConsole('Bem-vindo ao console!');
logToConsole('Digite seus comandos...');
