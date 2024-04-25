const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onFormInput);
formEl.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
let objForm = {};

function onFormInput(evt) {
  const name = evt.target.name;
  const value = evt.target.value;
  objForm[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(objForm));
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

function onLoad() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return;
    objForm = JSON.parse(data);
    for (let key in objForm) {
      formEl.elements[key].value = objForm[key];
    }
  } catch {
    {
      message;
    }
  }
}
onLoad()