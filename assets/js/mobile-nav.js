const botaoAbrirMenu = document.getElementById('botao-abrir-nav');
const botaoFecharMenu = document.getElementById('botao-fechar-nav');
const navbar = document.getElementById('navegacao');

botaoAbrirMenu.addEventListener('click', () => {
  navbar.classList.add('active');
});

botaoFecharMenu.addEventListener('click', () => {
  navbar.classList.remove('active');
});
