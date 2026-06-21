import cors from "cors";
import express from "express";
import sequelize from "./database.js";
import popularBanco from "./seed.js";
import router from "./routes.js";

const app = express();

// Permite requisições de outras origens (frontend)
app.use(cors());

// Permite receber dados em formato JSON
app.use(express.json());

// Registra as rotas da aplicação
app.use(router);

// Rota simples para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  res.json({
    mensagem: "Servidor funcionando!"
  });
});

const PORT = 3000;

// Função responsável por iniciar a aplicação
async function iniciarServidor() {
  try {

    // Testa a conexão com o banco de dados
    await sequelize.authenticate();
    console.log("Banco conectado!");

    // Cria as tabelas definidas pelos modelos
    await sequelize.sync();
    console.log("Modelos sincronizados!");

    // Insere as poções iniciais no banco
    await popularBanco();

    // Inicia o servidor na porta definida
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {

    // Exibe erros de inicialização
    console.error(error);
  }
}

// Executa a inicialização da aplicação
iniciarServidor();