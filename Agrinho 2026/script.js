function entrar() {
  const capa = document.getElementById("capa");

  capa.style.opacity = "0";

  setTimeout(() => {
    capa.style.display = "none";
  }, 800);
}

function mostrar(id, btn) {
  const secoes = document.querySelectorAll(".secao");
  const botoes = document.querySelectorAll(".nav-btn");

  // tira todas as ativas primeiro
  secoes.forEach(secao => {
    secao.classList.remove("ativa");
    secao.style.opacity = "0";
    secao.style.transform = "translateX(-20px) scale(0.98)";
  });

  botoes.forEach(b => b.classList.remove("ativa-btn"));

  const alvo = document.getElementById(id);

  setTimeout(() => {
    if (alvo) {
      alvo.classList.add("ativa");
      alvo.style.opacity = "1";
      alvo.style.transform = "translateX(0) scale(1)";
    }
  }, 120);

  if (btn) {
    btn.classList.add("ativa-btn");
  }
}