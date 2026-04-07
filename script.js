document.addEventListener('DOMContentLoaded', () => {

  //CAROUSEL
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.init(elem);
  instance.set(5);

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
  // Fecha o menu ao clicar em qualquer link
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});



  // FORMULÁRIO
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
  