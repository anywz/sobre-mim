const botao = document.getElementById('botmensagem');
const mensagem = document.getElementById('mensagemTexto');

botao.addEventListener('click', () => {
    mensagem.textContent = "As maiores jornadas começam com o primeiro passo!";

    setTimeout(() => {
        mensagem.textContent = "";
    }, 3000); 
});
