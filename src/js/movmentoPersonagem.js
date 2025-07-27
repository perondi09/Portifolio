function setupControlesPersonagem(jogoState) {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') { jogoState.movendoEsquerda = true; }
        else if (event.key === 'ArrowRight') { jogoState.movendoDireita = true; }
    });

    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowLeft') { jogoState.movendoEsquerda = false; }
        if (event.key === 'ArrowRight') { jogoState.movendoDireita = false; }
    });
}

function atualizarMovimentoPersonagem(jogoState) {
    let mudouPosicao = false;

    if (jogoState.movendoEsquerda) {  
        if (jogoState.cenarioAtual > 0 || jogoState.posicaoRelativaX > 10) {
            jogoState.posicaoRelativaX -= jogoState.VELOCIDADE_PERSONAGEM;
            jogoState.personagemImg.classList.remove('flipped');
            mudouPosicao = true;
        }
    }

    if (jogoState.movendoDireita) {
        const bordaDireita = jogoState.LARGURA_TELA - jogoState.personagemElement.clientWidth;        
        if (jogoState.cenarioAtual < 2 || jogoState.posicaoRelativaX < bordaDireita) {
            jogoState.posicaoRelativaX += jogoState.VELOCIDADE_PERSONAGEM;
            jogoState.personagemImg.classList.add('flipped');
            mudouPosicao = true;
        }
    }

    return mudouPosicao;
}