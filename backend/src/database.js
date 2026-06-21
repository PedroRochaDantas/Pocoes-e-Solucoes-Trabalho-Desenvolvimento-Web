import { Sequelize } from "sequelize";

// Cria a conexão com o banco SQLite em memória
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  logging: false,
});

// Exporta a conexão para ser utilizada pelos modelos
export default sequelize;