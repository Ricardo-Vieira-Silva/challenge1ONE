//CARROSEL//
const carrossel = document.getElementById('carrossel');
const images = carrossel.getElementsByTagName('img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

images[currentIndex].style.display = 'block';

setInterval(showNextImage, 3000);

//CONTATOS //

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const assuntoInput = document.getElementById('assunto');
    const mensagemInput = document.getElementById('mensagem');
    const enviarButton = document.querySelector('.formcontato__botao');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = nomeInput.value.trim(); 
        const email = emailInput.value.trim(); 
        const assunto = assuntoInput.value.trim(); 
        const mensagem = mensagemInput.value.trim(); 

        let validacao = true;

        if (nome === '' || nome.length > 50) {
            mostrarErro('nome', nome === '' ? 'Por favor, preencha o campo do nome.' : 'O nome deve ter no máximo 50 caracteres.');
            validacao = false;
        }

        if (!validarEmail(email)) {
            mostrarErro('email', 'Por favor, insira um endereço de e-mail válido.');
            validacao = false;
        }

        if (assunto === '' || assunto.length > 50) {
            mostrarErro('assunto', assunto === '' ? 'Por favor, preencha o campo do assunto.' : 'O assunto deve ter no máximo 50 caracteres.');
            validacao = false;
        }

        if (mensagem === '' || mensagem.length > 300) {
            mostrarErro('mensagem', mensagem === '' ? 'Por favor, preencha o campo da mensagem.' : 'A mensagem deve ter no máximo 300 caracteres.');
            validacao = false;
        }

        if (validacao) {
            alert('Formulário enviado com sucesso!');
            console.log('Formulário enviado com sucesso!');
            console.log('Nome:', nome);
            console.log('E-mail:', email);
            console.log('Assunto:', assunto);
            console.log('Mensagem:', mensagem);
          }
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarErro(campo, mensagem) {
        const erroElement = document.createElement('div');
        erroElement.classList.add('formcontato__erro');
        erroElement.textContent = mensagem;

        const campoInput = document.getElementById(campo);
        const campoContainer = campoInput.parentElement;
        campoContainer.appendChild(erroElement);

         setTimeout(function() {
            erroElement.remove();
        }, 5000);
    }

        function atualizarBotaoEnviar() {
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();
        const assunto = assuntoInput.value.trim();
        const mensagem = mensagemInput.value.trim();

        enviarButton.disabled = !(nome && email && assunto && mensagem);
    }

    form.addEventListener('input', atualizarBotaoEnviar);
});
