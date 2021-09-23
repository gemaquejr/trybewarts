const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const agreed = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('textarea');
const count = document.querySelector('#counter');

textArea.addEventListener('input', () => {
  const inputed = textArea.value;
  count.innerText = inputed.length;
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
