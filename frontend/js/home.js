const API_URL = "http://localhost:3000/pocoes";

// Busca as poções na API e exibe na página principal
async function carregarPocoes() {

    try {

        const resposta = await fetch(API_URL);

        const pocoes = await resposta.json();

        const lista = document.getElementById("lista-pocoes");

        // Limpa a lista antes de renderizar os cards
        lista.innerHTML = "";

        pocoes.forEach((pocao) => {

            lista.innerHTML += `
                <div class="card">

                    <img src="${pocao.imagem}" alt="${pocao.nome}">

                    <h3>${pocao.nome}</h3>

                    <p>${pocao.descricao}</p>

                    <p><strong>${pocao.preco} moedas</strong></p>

                    <button>Comprar</button>

                </div>
            `;
        });

    } catch (erro) {

        // Exibe erros de comunicação com a API
        console.error(erro);
    }
}

// Carrega as poções ao abrir a página
carregarPocoes();