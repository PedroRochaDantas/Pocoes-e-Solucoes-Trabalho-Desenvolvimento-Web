const API_URL = "http://localhost:3000/pocoes";

async function carregarPocoes() {

    try {

        const resposta = await fetch(API_URL);

        const pocoes = await resposta.json();

        const lista = document.getElementById("lista-pocoes");

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
        console.error(erro);
    }
}

carregarPocoes();