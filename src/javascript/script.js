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

// Máscara simples de telefone (formato brasileiro)
  document.getElementById('telefone').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 11) valor = valor.slice(0, 11); // Máximo 11 dígitos

    let formatado = '';

    if (valor.length > 0) formatado += '(' + valor.substring(0, 2);
    if (valor.length >= 3) formatado += ') ' + valor.substring(2, 7);
    if (valor.length >= 8) formatado += '-' + valor.substring(7);

    e.target.value = formatado;
  });

// Máscara simples de telefone (formato brasileiro)
function enviarEmail(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;
  const emailDestino = 'contato@usestackforge.info'; // substitui pelo seu e-mail

  const assunto = encodeURIComponent(`Contato de ${nome}`);
  const corpo = encodeURIComponent(`Olá! Me chamo ${nome}\nTelefone: ${telefone}\n\n${mensagem}`);

  const url = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;

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
