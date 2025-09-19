const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Alterna tema claro/escuro
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Rolagem suave para a seção
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
