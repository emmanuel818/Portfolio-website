(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telephoneInput = document.querySelector('#contact-telephone');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }


    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateTelephone() {
    let value = telephoneInput.value;

    if (!value) {
      showErrorMessage(telephoneInput, 'Telephone is a required field.');
      return false;
    }

    if (value.length < 9) {
      showErrorMessage(telephoneInput, 'The telephone needs to be at least 8 characters long.');
      return false;
    }

    showErrorMessage(telephoneInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValideTelephone = validateTelephone();
    return isValidEmail && isValideTelephone;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Sucess!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  telephoneInput.addEventListener('input', telephonePassword);
})();
