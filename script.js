document.addEventListener('DOMContentLoaded', () => {

  //CAROUSEL
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem);
  instance.set(5);

  //ID DA CONTA/EMAIL QUE RECEBERÁ O CONTATO
  emailjs.init("mAVssxnbcxtjcglb3");

});

// MENU MOBILE
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// FECHAR MENU AO ESCOLHER OPÇÃO
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

//ID DA CONTA/EMAIL QUE RECEBERÁ O CONTATO
(function () {
  emailjs.init("mAVssxnbcxtjcglb3");
})();

// FORMULÁRIO DE CONTATO
const meuForm = document.getElementById('form');
if (meuForm) {
  const btnEnviar = meuForm.querySelector('button[type="submit"]');

  meuForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const textoOriginal = btnEnviar.innerText;
    btnEnviar.innerText = 'Enviando...';
    btnEnviar.style.opacity = '0.7';
    btnEnviar.disabled = true;

    const serviceID = 'service_8e4zx8l';
    const templateID = 'template_fymsq2g';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Mensagem enviada! Aguarde que logo te retornarei 🚀');
        meuForm.reset();

        btnEnviar.innerText = textoOriginal;
        btnEnviar.style.opacity = '1';
        btnEnviar.disabled = false;
      }, (err) => {
        alert('Ops! Algo deu errado. Tente novamente mais tarde.');
        console.log('Erro:', err);

        btnEnviar.innerText = textoOriginal;
        btnEnviar.style.opacity = '1';
        btnEnviar.disabled = false;
      });
  });
}

//FORMATAR INPUT TELEFONE
document.getElementById('tel').addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');

  if (!value) {
    e.target.value = '';
    return;
  }

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else {
    value = value.replace(/^(\d*)$/, '($1');
  }

  e.target.value = value;

});