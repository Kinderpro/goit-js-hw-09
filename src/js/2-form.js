const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
let objForm = {};

function onFormInput(evt) {
  const { name, value } = evt.target;
  objForm[name] = value.trim();
  saveToLs(STORAGE_KEY, objForm);
}

function onFormSubmit(e) {
  e.preventDefault();
  const emailName = formEl.elements.email.value.trim();
  const messageVal = formEl.elements.message.value.trim();
  if (emailName === '' || messageVal === '') {
    return alert('Будь ласка, заповніть усі поля форми!');
  }

  console.log(objForm);

  localStorage.removeItem(STORAGE_KEY);
  e.target.reset();
}

function saveToLs(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLs(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

function onLoad() {
  formEl.elements.email.value = loadFromLs(STORAGE_KEY).email || 'Anonym';
  formEl.elements.message.value = loadFromLs(STORAGE_KEY).message;
}

onLoad();
