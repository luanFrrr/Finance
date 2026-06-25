import { Router } from "express";

const router = Router();

// Usuarios
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios/registro", controllerUsuario.Inserir);
router.get("/usuarios", controllerUsuario.Perfil);
router.put("/usuarios", controllerUsuario.Editar);
router.put("/usuarios/password", controllerUsuario.Senha);

// Lançamentos
router.get("/lancamentos/resumo", controllerLancamento.Resumo);
router.get("/lancamentos", controllerLancamento.Listar);
router.post("/lancamentos", controllerLancamento.Inserir);
router.put("/lancamentos/:id_lancamento", controllerLancamento.Editar);
router.delete("/lancamentos/:id_lancamento", controllerLancamento.Deletar);

//Categorias
router.get("/categorias", controllerCategoria.Listar);
router.post("/categorias", controllerCategoria.Inserir);
router.put("/categorias/:id_categoria", controllerCategoria.Editar);
router.delete("/categorias/:id_categoria", controllerCategoria.Deletar);

export default router;
