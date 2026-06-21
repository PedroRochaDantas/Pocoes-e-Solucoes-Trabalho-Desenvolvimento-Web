import cors from "cors";
import express from "express";
import sequelize from "./database.js";
import Pocao from "./Pocao.js";
import popularBanco from "./seed.js";
import router from "./routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({
    mensagem: "Servidor funcionando!"
  });
});

const PORT = 3000;

async function iniciarServidor() {
  try {

    await sequelize.authenticate();
    console.log("Banco conectado!");

    await sequelize.sync();
    console.log("Modelos sincronizados!");

    await popularBanco();

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
}
iniciarServidor();