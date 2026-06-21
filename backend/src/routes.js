import { Router } from "express";
import Pocao from "./Pocao.js";

const router = Router();

/*
  Retorna todas as poções cadastradas
*/
router.get("/pocoes", async (req, res) => {
  try {

    // Busca todas as poções no banco
    const pocoes = await Pocao.findAll();

    res.status(200).json(pocoes);

  } catch (error) {

    res.status(500).json({
      erro: "Erro ao buscar poções"
    });
  }
});

/*
  Cadastra uma nova poção
*/
router.post("/pocoes", async (req, res) => {
  try {

    // Obtém os dados enviados pelo cliente
    const { nome, descricao, imagem, preco } = req.body;

    // Validação para impedir preços negativos
    if (preco < 0) {
        return res.status(400).json({
            erro: "O preço não pode ser negativo."
        });
    }

    // Cria a nova poção no banco de dados
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
  Remove uma poção a partir do seu ID
*/
router.delete("/pocoes/:id", async (req, res) => {
  try {

    // Obtém o ID informado na URL
    const { id } = req.params;

    // Remove a poção correspondente
    const removidas = await Pocao.destroy({
      where: { id }
    });

    // Verifica se alguma poção foi removida
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

// Exporta as rotas da aplicação
export default router;