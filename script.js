// Botao MENU para mobiles e tablets
document.addEventListener('DOMContentLoaded', () => {

   var elem = document.querySelector('.carousel');
    var instance = M.Carousel.init(elem);

    instance.set(5);

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
    //Carrossel

  
   
 

 });
  