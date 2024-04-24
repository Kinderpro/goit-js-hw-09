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
  const emailName = formEl.email.value.trim();
  const messageVal = formEl.message.value.trim();
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

function onLoad() {
  try {
    const email = (formEl.email.value = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ).email);
    const text = (formEl.message.value = JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ).message);
    return email, text;
  } catch {
    return localStorage.getItem(STORAGE_KEY);
  }
}
onLoad();
// function loadFromLs(key) {
//   const data = localStorage.getItem(key);
//   try {
//     return JSON.parse(data);
//   } catch {
//     return data;
//   }
// }

// function onLoad() {

//   formEl.email.value = loadFromLs(STORAGE_KEY)
//   formEl.message.value = loadFromLs(STORAGE_KEY)
//
// }

// onLoad();
