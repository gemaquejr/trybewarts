const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const btnLogin = document.querySelector('#login');
const agreed = document.querySelector('#agreement');
const btnSubmit = document.querySelector('#submit-btn');
const textArea = document.querySelector('textarea');
const count = document.querySelector('#counter');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputCasa = document.querySelector('#house');
const family = document.querySelectorAll('#family');
const allRate = document.querySelectorAll('#avaliation');
const form = document.querySelector('#evaluation-form');

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

const clearForm = () => { form.innerHTML = ''; };
let inputFamily = '';
let inputRate = '';

family.forEach((radio) => {
  radio.addEventListener('click', (event) => {
    inputFamily = event.target.value;
  });
});

allRate.forEach((rate) => {
  rate.addEventListener('click', (event) => {
    inputRate = event.target.value;
  });
});

function checkSubjects() {
  let personSubjects = '';
  const checkedButtons = document.querySelectorAll('.subject:checked');
  for (let i = 0; i < checkedButtons.length; i += 1) {
    personSubjects += checkedButtons[i].value;
    if (i + 1 !== checkedButtons.length) {
      personSubjects += ', ';
    }
  }
  return personSubjects;
}

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const formAnswer = (`
  Nome: ${inputName.value} ${inputLastName.value}
  Email: ${inputEmail.value}
  Casa: ${inputCasa.value}
  Família: ${inputFamily}
  Matérias: ${checkSubjects()}
  Avaliação: ${inputRate}
  Observações: ${textArea.value}`);
  clearForm();
  form.innerHTML = formAnswer;
});
