
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
email.value = data.email || '';
message.value = data.message || '';

function onFormInput(event) {
    if (data) {
    formData = data;
  }
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};
    
 function onFormSubmit(event) {
     event.preventDefault();
 const {
        elements: { email, message }
      } = event.target;
      
      if (email.value === "" || message.value === "") {
        return window.alert("Please, fill in all the fields!");
      };
    // console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    
};
   