function setupProjetos() {
    const filmstrip = document.getElementById('projetos-filmstrip');
    const btnPrev = document.getElementById('btn-prev-projeto');
    const btnNext = document.getElementById('btn-next-projeto');

    let todosOsProjetos = [];
    let projetoAtualIndex = 0;

    function moverCarrossel() {
        const novaPosicao = projetoAtualIndex * -100;
        filmstrip.style.transform = `translateX(${novaPosicao}%)`;
    }

    async function buscarProjetosGitHub() {
        const url = 'https://api.github.com/users/racionalVol1/repos?sort=created&direction=desc';
        try {
            const response = await fetch(url);
            todosOsProjetos = await response.json();
            filmstrip.innerHTML = "";

            if (todosOsProjetos.length > 0) {
                todosOsProjetos.forEach(projeto => {
                    const slideElement = document.createElement("div");
                    slideElement.className = "projeto-slide";
                    slideElement.innerHTML = `
                        <h3>${projeto.name}</h3>
                        <p>${projeto.description || "Este projeto não possui uma descrição."}</p>                       
                        <a href="${projeto.html_url}" target="_blank">Ver no GitHub</a>
                    `;
                    filmstrip.appendChild(slideElement);
                });
            } else {
                filmstrip.innerHTML = "<p>Nenhum projeto encontrado.</p>";
            }
        } catch (error) {
            filmstrip.innerHTML = "<p>Não foi possível carregar os projetos.</p>";
            console.error("Erro ao buscar projetos:", error);
        }
    }

    btnNext.addEventListener('click', () => {
        if (todosOsProjetos.length > 0) {
            projetoAtualIndex = (projetoAtualIndex + 1) % todosOsProjetos.length;
            moverCarrossel();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (todosOsProjetos.length > 0) {
            projetoAtualIndex = (projetoAtualIndex - 1 + todosOsProjetos.length) % todosOsProjetos.length;
            moverCarrossel();
        }
    });

    buscarProjetosGitHub();
}