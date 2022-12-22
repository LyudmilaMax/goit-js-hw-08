import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

setInitialDatainForm();
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function setInitialDatainForm() {
  const defaultValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (defaultValue) {
    formData = defaultValue;
    if (defaultValue.email) {
      form.elements.email.value = defaultValue.email;
    }
    if (defaultValue.message) {
      form.elements.message.value = defaultValue.message;
    }
       
  }
}

function onFormSubmit(e) {
  e.preventDefault();
    console.log(formData);
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return window.alert("Please, fill in all the fields!");
      };
  form.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {};
}