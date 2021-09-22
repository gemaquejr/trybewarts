const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const formLogin = document.querySelector('.trybewarts-login');

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
})
