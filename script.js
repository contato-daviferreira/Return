// Botao MENU para mobiles e tablets
document.addEventListener('DOMContentLoaded', () => {

  // Header
  fetch("./partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      const menuToggle = document.getElementById('mobile-menu');
      const navLinks = document.querySelector('.menu');
      const links = document.querySelectorAll('.menu a');

      // Verifica se os elementos existem antes de adicionar o evento (evita erros no console)
      if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });

        links.forEach(link => {
          link.addEventListener('click', () => {
            navLinks.classList.remove('active');
          });
        });
      } // <--- Faltava fechar o if e organizar as chaves aqui
    });

  // Contato
  fetch("./partials/contato.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("contato").innerHTML = data;

      // Pegue o elemento do formulário e o botão
      const meuForm = document.getElementById('form'); // Verifique se o seu <form> tem id="form"
      const btnEnviar = meuForm.querySelector('button[type="submit"]');

      meuForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede a página de recarregar

        // 1. Feedback visual de que está enviando
        const textoOriginal = btnEnviar.innerText;
        btnEnviar.innerText = 'Enviando...';
        btnEnviar.style.opacity = '0.7';
        btnEnviar.disabled = true;

        const serviceID = 'service_8e4zx8l';
        const templateID = 'template_fymsq2g'; // Pegue no painel do EmailJS

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            // 2. O QUE APARECE QUANDO DÁ CERTO:
            alert('Mensagem enviada! Aguarde que logo te retornarei 🚀');

            // Limpa os campos do formulário
            meuForm.reset();

            // Volta o botão ao estado normal
            btnEnviar.innerText = textoOriginal;
            btnEnviar.style.opacity = '1';
            btnEnviar.disabled = false;

          }, (err) => {
            // O QUE APARECE SE DER ERRO:
            alert('Ops! Algo deu errado. Tente novamente mais tarde.');
            console.log('Erro:', err);

            btnEnviar.innerText = textoOriginal;
            btnEnviar.style.opacity = '1';
            btnEnviar.disabled = false;
          });
      });
    });

  // Head
  fetch("./partials/head.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("head").innerHTML = data;
    });

  // Apresentação
  fetch("./partials/apresentacao.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("apresentacao").innerHTML = data;
    });

  // Rodapé
  fetch("./partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  // Desenvolvimento ou Manutenção
  fetch("./partials/desenvolvimento.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("desenvolvimento").innerHTML = data;
    });

  //Carrossel
    fetch("./partials/carrossel.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("carousel").innerHTML = data;

    // Inicia o carrossel depois de carregar
    var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem);

    instance.set(1);
  });});
  