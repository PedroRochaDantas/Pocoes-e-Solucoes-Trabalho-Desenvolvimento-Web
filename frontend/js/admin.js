const API_URL = "http://localhost:3000/pocoes";

const lista = document.getElementById("lista-admin");
const form = document.getElementById("form-pocao");

async function carregarPocoes() {

    const resposta = await fetch(API_URL);

    const pocoes = await resposta.json();

    lista.innerHTML = "";

    pocoes.forEach((pocao) => {

        lista.innerHTML += `
            <div class="card-admin">

                <img src="${pocao.imagem}">

                <h3>${pocao.nome}</h3>

                <p>${pocao.descricao}</p>

                <p>${pocao.preco} moedas</p>

                <button
                    class="remover"
                    onclick="removerPocao(${pocao.id})"
                >
                    Remover
                </button>

            </div>
        `;
    });
}

form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const novaPocao = {

            nome: document.getElementById("nome").value,

            descricao: document.getElementById("descricao").value,

            imagem: document.getElementById("imagem").value,

            preco: Number(
                document.getElementById("preco").value
            )
        };

        await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novaPocao)
        });

        form.reset();

        carregarPocoes();
    });

async function removerPocao(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"
    });

    carregarPocoes();
}

carregarPocoes();