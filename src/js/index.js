/*
    Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pagar o elemneto html dos botões
    - passo 2 - dar um jeito de indenticar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem anterior correspondente ao botão clicando
    - passo 7 - esconder a informção do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemneto html dos botões
const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//- passo 2 - dar um jeito de indenticar o clique do usuário no botão
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        //- passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        marcarBotaoSelecionado(botao);

        //- passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        //- passo 6 - fazer aparecer a imagem anterior correspondente ao botão clicando
        mostrarImagemDeFundo(indice);

        //- passo 7 - esconder a informção do dragão anteriormente selecionado
        esconderInformacoesAtivas();

        //- passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indice);

    });
});


function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesativa = document.querySelector(".informacoes.ativa");
    informacoesativa.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

