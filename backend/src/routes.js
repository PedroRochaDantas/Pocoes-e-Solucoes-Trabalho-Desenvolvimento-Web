import { Router } from "express";
import Pocao from "./Pocao.js";

const router = Router();

/*
  GET /pocoes
*/
router.get("/pocoes", async (req, res) => {
  try {
    const pocoes = await Pocao.findAll();

    res.status(200).json(pocoes);

  } catch (error) {
    res.status(500).json({
      erro: "Erro ao buscar poções"
    });
  }
});

/*
  POST /pocoes
*/
router.post("/pocoes", async (req, res) => {
  try {

    const { nome, descricao, imagem, preco } = req.body;

    if (preco < 0) {
        return res.status(400).json({
            erro: "O preço não pode ser negativo."
        });
    }

    const novaPocao = await Pocao.create({
      nome,
      descricao,
      imagem,
      preco
    });

    res.status(201).json(novaPocao);

  } catch (error) {
    res.status(500).json({
      erro: "Erro ao criar poção"
    });
  }
});

/*
  DELETE /pocoes/:id
*/
router.delete("/pocoes/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const removidas = await Pocao.destroy({
      where: { id }
    });

    if (removidas === 0) {
      return res.status(404).json({
        erro: "Poção não encontrada"
      });
    }

    res.status(200).json({
      mensagem: "Poção removida"
    });

  } catch (error) {
    res.status(500).json({
      erro: "Erro ao remover poção"
    });
  }
});

export default router;