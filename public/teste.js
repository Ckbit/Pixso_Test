document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animação do ícone hambúrguer
        menuToggle.classList.toggle('active');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});