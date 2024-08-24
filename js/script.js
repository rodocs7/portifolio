/*  turns the menu hamburguer into a X ==== */

const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {

    toggleMenu();
});


function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');


    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

// document.querySelectorAll('.btn').forEach(button => {
//     button.addEventListener('click', () => {
//         console.log('Button clicked!'); // Adicione este log para verificar

//         const serviceBox = button.closest('.services-box');
//         serviceBox.classList.toggle('expanded');

//         if (serviceBox.classList.contains('expanded')) {
//             button.textContent = 'Leia menos';
//         } else {
//             button.textContent = 'Leia mais';
//         }
//     });
// });


class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      const formData = new FormData(this.form); // Corrigido para usar FormData

      await fetch(this.url, {
        method: "POST",
        body: formData,
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      console.error(error); // Ajuste para capturar e registrar erros
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();
