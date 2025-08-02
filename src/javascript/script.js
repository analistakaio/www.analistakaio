// ==============================
// 🔽 MENU RESPONSIVO
// ==============================

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("ativo");
}

// ==============================
// 🔼 FORMULÁRIO WHATSAPP
// ==============================

function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5533998244199';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');
}

// FUNÇÃO PARA ESCODER O MENU AO ROLAR A PÁGINA
let lastScrollTop = 0;
let nav = document.querySelector('.navegacao');
let delta = 50; // distância mínima para disparar o evento
let lastActionScroll = 0; // último scroll onde houve ação

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Se a diferença for menor que delta, ignora
  if (Math.abs(scrollTop - lastActionScroll) <= delta) {
    return;
  }

  if (scrollTop > lastScrollTop && scrollTop > delta) {
    // Rolando para baixo e passou delta, esconde o header
    nav.style.top = '-80px';
    lastActionScroll = scrollTop;
  } else if (scrollTop + window.innerHeight < document.body.offsetHeight) {
    // Rolando para cima, mostra o header
    nav.style.top = '0';
    lastActionScroll = scrollTop;
  }

  lastScrollTop = scrollTop;
});
