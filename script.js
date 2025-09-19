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

// Adiciona animação no hero ao carregar a página
window.addEventListener('load', () => {
  document.querySelector('.hero h2').classList.add('animate');
  document.querySelector('.hero p').classList.add('animate');
  document.querySelector('.hero button').classList.add('animate');
});
