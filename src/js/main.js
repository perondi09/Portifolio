function atualizarPosicaoVisualPersonagem(jogoState) {
    const posicaoAbsolutaX = (jogoState.cenarioAtual * jogoState.LARGURA_TELA) + jogoState.posicaoRelativaX;
    jogoState.personagemElement.style.left = `${posicaoAbsolutaX}px`;
}


document.addEventListener('DOMContentLoaded', () => {
    const jogoState = {
        mundo: document.getElementById('mundo-horizontal'),
        personagemElement: document.getElementById('personagem'),
        personagemImg: document.getElementById('personagem').querySelector('img'),
        
        LARGURA_TELA: window.innerWidth,
        VELOCIDADE_PERSONAGEM: 4,
        GIF_PERSONAGEM: 'src/img/peronsagem.gif',

        cenarioAtual: 0,
        posicaoRelativaX: 50, 
        movendoEsquerda: false,
        movendoDireita: false
    };

    jogoState.personagemImg.classList.add('flipped');
    jogoState.personagemImg.src = jogoState.GIF_PERSONAGEM;
    atualizarPosicaoVisualPersonagem(jogoState);
 
    setupProjetos();
    setupControlesPersonagem(jogoState);

    function gameLoop() {       
        const mudouPosicao = atualizarMovimentoPersonagem(jogoState);

        if (mudouPosicao) {
            atualizarPosicaoVisualPersonagem(jogoState);
        }

        verificarTrocaDeCenario(jogoState);
        
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});