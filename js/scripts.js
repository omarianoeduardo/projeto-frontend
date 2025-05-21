document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(initSlider);
});

function initSlider(slider) {
  const images = slider.querySelectorAll('img');
  let current = 0;
  const total = images.length;

  setInterval(() => {
    images[current].classList.remove('ativa');
    current = (current + 1) % total;
    images[current].classList.add('ativa');
  }, 3000); // troca a cada 3 segundos
}

const yearEl = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
if (yearEl) {
  yearEl.textContent = currentYear;
}

// ABA DE EVENTOS SEMANAIS //
// Seleciona todos os botões de adicionar/remover
const buttons = document.querySelectorAll('.event-card button');

// Puxa e salva lista do localStorage
const getMyEvents = () => JSON.parse(localStorage.getItem('myEvents') || '[]');
const saveMyEvents = list => localStorage.setItem('myEvents', JSON.stringify(list));

// Atualiza o texto dos botões de acordo com o storage
function updateButtons() {
  const my = getMyEvents();
  buttons.forEach(btn => {
    const card = btn.closest('.event-card');
    const id = parseInt(card.dataset.id, 10);
    if (my.find(ev => ev.id === id)) {
      btn.textContent = 'Remover dos Meus Eventos';
      btn.classList.add('remover');
    } else {
      btn.textContent = 'Adicionar aos Meus Eventos';
      btn.classList.remove('remover');
    }
  });
}

// Lida com clique em cada botão
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.event-card');
    const id = parseInt(card.dataset.id, 10);
    const title = card.querySelector('h3').textContent;
    const date = card.querySelector('small').textContent;
    const desc = card.querySelectorAll('p')[1].textContent;
    const img = card.querySelector('img').src;

    let my = getMyEvents();
    // se já existe, remove; senão adiciona
    if (my.find(ev => ev.id === id)) {
      my = my.filter(ev => ev.id !== id);
    } else {
      my.push({ id, title, date, desc, img });
    }
    saveMyEvents(my);
    updateButtons();
  });
});

// No carregamento, ajusta botões
document.addEventListener('DOMContentLoaded', updateButtons);

// PAGINA DE LOGIN
const form = document.getElementById('loginForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!form.checkValidity()) {
    form.classList.add('was-validated');
  } else {
    // Se válido, simula envio ou implementa lógica de autenticação
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('E-mail:', email);
    console.log('Senha:', password);

    alert('Formulário enviado com sucesso!');
  }
});
