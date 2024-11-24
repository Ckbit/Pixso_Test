function toggleMenu() {
    const options = document.getElementById('navbar-options');
    options.classList.toggle('show');
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('current-date');
    const today = new Date();
    currentDateElement.textContent = formatDate(today);
});