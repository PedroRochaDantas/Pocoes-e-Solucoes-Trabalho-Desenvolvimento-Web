const API_URL = "http://localhost:3000/pocoes";

const lista = document.getElementById("lista-admin");
const form = document.getElementById("form-pocao");

// Busca as poções na API e atualiza a listagem da página
async function carregarPocoes() {

    const resposta = await fetch(API_URL);

    const pocoes = await resposta.json();

    // Limpa a lista antes de renderizar novamente
    lista.innerHTML = "";

    pocoes.forEach((pocao) => {

        lista.innerHTML += `
            <div class="card-admin">

                <img src="${pocao.imagem}">

                <h3>${pocao.nome}</h3>

                <p>${pocao.descricao}</p>

                <p class="preco">${pocao.preco} moedas</p>

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

// Trata o envio do formulário de cadastro
form.addEventListener("submit", async (event) => {

        // Impede o recarregamento da página
        event.preventDefault();

        // Monta o objeto com os dados informados pelo usuário
        const novaPocao = {

            nome: document.getElementById("nome").value,

            descricao: document.getElementById("descricao").value,

            imagem: document.getElementById("imagem").value,

            preco: Number(
                document.getElementById("preco").value
            )
        };

        // Envia a nova poção para a API
        await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novaPocao)
        });

        // Limpa o formulário após o cadastro
        form.reset();

        // Atualiza a listagem de poções
        carregarPocoes();
    });

// Remove uma poção pelo ID
async function removerPocao(id) {

    await fetch(`${API_URL}/${id}`, {

        method: "DELETE"
    });

    // Atualiza a lista após a remoção
    carregarPocoes();
}

// Carrega as poções quando a página é aberta
carregarPocoes();