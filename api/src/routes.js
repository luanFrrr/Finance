import { Router } from "express";
import controllerUsuario from "./controllers/controller.usuario.js";
import controllerCategoria from "./controllers/controller.categoria.js";
import jwt from "./token.js";

const router = Router();

// Usuarios
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios/registro", controllerUsuario.Inserir);
router.get("/usuarios", jwt.ValidateJWT, controllerUsuario.Perfil);
router.put("/usuarios", jwt.ValidateJWT, controllerUsuario.Editar);
router.put("/usuarios/password", jwt.ValidateJWT, controllerUsuario.Senha);

/*
 Lançamentos
router.get("/lancamentos/resumo", jwt.ValidateJWT, controllerLancamento.Resumo);
router.get("/lancamentos", jwt.ValidateJWT, controllerLancamento.Listar);
router.post("/lancamentos", jwt.ValidateJWT, controllerLancamento.Inserir);
router.put("/lancamentos/:id_lancamento", jwt.ValidateJWT, controllerLancamento.Editar);
router.delete("/lancamentos/:id_lancamento", controllerLancamento.Deletar);
*/

// Categorias
router.get("/categorias", jwt.ValidateJWT, controllerCategoria.Listar);
router.post("/categorias", jwt.ValidateJWT, controllerCategoria.Inserir);
router.put(
  "/categorias/:id_categoria",
  jwt.ValidateJWT,
  controllerCategoria.Editar,
);
router.delete(
  "/categorias/:id_categoria",
  jwt.ValidateJWT,
  controllerCategoria.Excluir,
);

export default router;
