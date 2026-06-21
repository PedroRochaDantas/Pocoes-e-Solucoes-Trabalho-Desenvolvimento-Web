import { DataTypes } from "sequelize";
import sequelize from "./database.js";

// Define o modelo de dados das poções
const Pocao = sequelize.define("Pocao", {

  // Nome da poção
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Descrição dos efeitos da poção
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  // Caminho ou URL da imagem da poção
  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // Preço da poção em moedas
  preco: {
      type: DataTypes.FLOAT,
      allowNull: false,

      validate: {

          // Impede valores negativos
          min: 0
      }
  }
});

// Exporta o modelo para uso nas rotas e demais arquivos
export default Pocao;