/*

quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a proxima imagem

a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou mostrar a próxima imagem

- esconder todas as imagens
pegar todas as imagens usando o DOM e remover a classe mostrar

- mostrar a próxima imagem
pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela

*/

// const imagensPainel = document.querySelectorAll(".imagem-painel");
// const setaAvancar = document.getElementById("btn-avancar");
// const setaVoltar = document.getElementById("btn-voltar");
// let imagemAtual = 0;

// setaAvancar.addEventListener("click", function () {

//     const totalDeImagens = imagensPainel.length - 1;

//     if(imagemAtual === totalDeImagens){
//         return;
//     }

//     imagemAtual++;

//     esconder();

//     mostrar();

// })

// setaVoltar.addEventListener("click", function () {

//     if(imagemAtual === 0){
//         return;
//     }

//     imagemAtual--;

//     esconder();

//     mostrar();
// })

// function esconder(){
//     imagensPainel.forEach(imagem => {
//         imagem.classList.remove("mostrar");
//     });
// }

// function mostrar(){
//     imagensPainel[imagemAtual].classList.add("mostrar");
// }

// var input = document.querySelector("#name");

// var texto = input.value;

// console.log(texto);


const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

// Funções para mostrar e remover a classe "mostrar"
function mostrar() {
    imagensPainel[imagemAtual].classList.add("mostrar");
}

function remover() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove("mostrar");
    });
}

// Função para avançar o painel
function avancarPainel() {
    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === totalDeImagens) {
        imagemAtual = -1; // Reinicia para começar do início novamente
    }

    imagemAtual++;
    remover();
    mostrar();
}

// Função para voltar o painel
function voltarPainel() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;
    remover();
    mostrar();
}

// Evento de clique para avançar
setaAvancar.addEventListener("click", avancarPainel);

// Evento de clique para voltar
setaVoltar.addEventListener("click", voltarPainel);

// Intervalo para avançar automaticamente a cada 3 segundos
setInterval(avancarPainel, 3000);

// Inicializar o painel mostrando a primeira imagem
mostrar();



















































































































