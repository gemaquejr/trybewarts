const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const agreed = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('textarea');
const count = document.querySelector('#counter');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const form = document.querySelector('#evaluation-form');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');

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

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.createElement('span');
  const emailB = document.createElement('span');
  const casa = document.createElement('span');
  const house = inputCasa.options[inputCasa.selectedIndex].text;
  const femSel = document.querySelector('input[name="family"]:checked').value;
  const materia = document.querySelectorAll('input[class="subject"]:checked').value;
  name.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;
  emailB.innerText = `Email: ${inputEmail.value}`;
  casa.innerText = `Casa: ${house}`;
  form.innerHTML = `${name.innerText} 
  ${emailB.innerText} 
  ${casa.innerText} 
  Família: ${femSel}`;
});
