import serviceCategoria from "../service/service.categoria.js";

async function Listar(req, res) {
  try {
    const categorias = await serviceCategoria.Listar(req.id_usuario);
    res.status(201).json(categorias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Inserir(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const { categoria, icone } = req.body;
    const retorno = await serviceCategoria.Inserir(
      id_usuario,
      categoria,
      icone,
    );
    res.status(201).json(retorno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Editar(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const id_categoria = req.params.id_categoria;
    const { categoria, icone } = req.body;
    const retorno = await serviceCategoria.Editar(
      id_categoria,
      id_usuario,
      categoria,
      icone,
    );
    res.status(200).json(retorno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Excluir(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const id_categoria = req.params.id_categoria;
    const retorno = await serviceCategoria.Excluir(id_categoria, id_usuario);
    res.status(200).json(retorno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { Listar, Inserir, Editar, Excluir };
