import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();

let livros = router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivroPorEditora)
    .get("/livros/:id", livroController.listarLivroPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarLivro)
    .delete("/livros/:id", livroController.excluirLivro)    


export default livros;