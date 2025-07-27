function trocarCenario(direcao, jogoState) {
    if (direcao === 'proximo' && jogoState.cenarioAtual < 2) {
        jogoState.cenarioAtual++;       
        jogoState.posicaoRelativaX = 5;
    } else if (direcao === 'anterior' && jogoState.cenarioAtual > 0) {
        jogoState.cenarioAtual--;       
        jogoState.posicaoRelativaX = jogoState.LARGURA_TELA - jogoState.personagemElement.clientWidth - 5;
    }

    jogoState.mundo.style.transform = `translateX(-${jogoState.cenarioAtual * jogoState.LARGURA_TELA}px)`;
    atualizarPosicaoVisualPersonagem(jogoState);
}


function verificarTrocaDeCenario(jogoState) {
       if (jogoState.posicaoRelativaX > jogoState.LARGURA_TELA) {
        trocarCenario('proximo', jogoState);
    }    
    else if (jogoState.posicaoRelativaX < -jogoState.personagemElement.clientWidth) {
        trocarCenario('anterior', jogoState);
    }
}