const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const agreed = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('textarea');
const count = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  const limit = 500 - textArea.value.length;
  count.innerText = limit;
});

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreed.addEventListener('click', (event) => {
  event.preventDefault();
  if (agreed.checked) {
    btnSubmit.removeAttribute('disabled');
  }
});

function sendForm() {
  agreed.innerHTML = '';
  agreed.innerHTML += `<p>Nome: ${name.value} </p>`
}
