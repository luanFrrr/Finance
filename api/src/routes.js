import { Router } from "express";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

// Usuarios
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios/registro", controllerUsuario.Inserir);
router.get("/usuarios", jwt.ValidateJWT, controllerUsuario.Perfil);
router.put("/usuarios", jwt.ValidateJWT, controllerUsuario.Editar);
router.put("/usuarios/password", jwt.ValidateJWT, controllerUsuario.Senha);

/*
// Lançamentos
router.get("/lancamentos/resumo", jwt.ValidateJWT, controllerLancamento.Resumo);
router.get("/lancamentos", jwt.ValidateJWT, controllerLancamento.Listar);
router.post("/lancamentos", jwt.ValidateJWT, controllerLancamento.Inserir);
router.put("/lancamentos/:id_lancamento", jwt.ValidateJWT, controllerLancamento.Editar);
router.delete("/lancamentos/:id_lancamento", controllerLancamento.Deletar);

//Categorias
router.get("/categorias", controllerCategoria.Listar);
router.post("/categorias", controllerCategoria.Inserir);
router.put("/categorias/:id_categoria", controllerCategoria.Editar);
router.delete("/categorias/:id_categoria", controllerCategoria.Deletar);
*/

export default router;
