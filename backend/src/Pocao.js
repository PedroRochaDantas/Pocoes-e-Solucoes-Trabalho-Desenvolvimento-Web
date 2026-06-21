import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const Pocao = sequelize.define("Pocao", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  },

  preco: {
      type: DataTypes.FLOAT,
      allowNull: false,

      validate: {
          min: 0
      }
  }
});

export default Pocao;