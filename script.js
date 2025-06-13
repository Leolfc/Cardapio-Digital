const botaoDark = document.querySelector('#theme-toggle-btn')

botaoDark.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode')
    const modoAtivo = document.body.classList.contains('dark-mode')
    botaoDark.textContent =modoAtivo ? '🌞 Modo Claro' : '🌙 Modo Escuro'
})

const inputPesquisa = document.querySelector('#pesquisaInput');
const itens = document.querySelectorAll('.item');

inputPesquisa.addEventListener('input', () => {
  const termo = inputPesquisa.value.toLowerCase();

  itens.forEach((item) => {
    const nome = item.getAttribute('data-nome').toLowerCase();

    if (nome.includes(termo)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  
  });
  
});

