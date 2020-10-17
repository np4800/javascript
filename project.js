console.log("Project Dragon Travel Desk");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let isNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;

$('#success').hide();
$('#failure').hide();

// console.log(name,phone,email);

name.addEventListener('blur', ()=>{
  console.log('Name is Blurr');
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
  let name_str = name.value;

  if (regex.test(name_str)){
    console.log("Username is Valid");
    name.classList.remove('is-invalid');
    isNameValid = true;
  } else {
    console.log('Invalid Format of username. It should not start with number.');
    name.classList.add('is-invalid');
    isNameValid = false;
  }
});

email.addEventListener('blur', ()=>{
  console.log('Email is Blurr');
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let email_str = email.value;

  if (regex.test(email_str)){
    console.log("Email is Valid");
    email.classList.remove('is-invalid');
    isEmailValid = true;
  } else {
    console.log('Invalid Format of email.');
    email.classList.add('is-invalid');
    isEmailValid = false;
  }
});

phone.addEventListener('blur', ()=>{
  console.log('Phone is Blurr');
  let regex = /^([0-9]){10}$/;
  let phone_str = phone.value;

  if (regex.test(phone_str)){
    console.log("Phone is Valid");
    phone.classList.remove('is-invalid');
    isPhoneValid = true;
  } else {
    console.log('Invalid phone number.');
    phone.classList.add('is-invalid');
    isPhoneValid = false;
  }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log('You Clicked');
  if (isNameValid && isEmailValid && isPhoneValid) {
    console.log('Phone, eamil and user are valid. Submitting the form');

    let success = document.getElementById('success');
    success.classList.add('show');
    $('#failure').hide();
    $('#success').show();

  } else {
    console.log('Not valid, hence not submitting');

    let failure = document.getElementById('failure');
    failure.classList.add('show');
    $('#success').hide();
    $('#failure').show();

  }
});
