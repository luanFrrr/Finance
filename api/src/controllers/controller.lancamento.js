import serviceLancamento from "../service/service.lancamento.js";

//Listar em função do mês/ano e do termo de busca
async function Listar(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const dt_filtro = req.query.dt_filtro; //yyyy-mm-01
    const busca = req.query.busca;

    const lancamentos = await serviceLancamento.Listar(
      id_usuario,
      dt_filtro,
      busca,
    );
    res.status(201).json(lancamentos);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
}


async function Inserir(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const { descricao,valor,id_categoria, tipo, dt_lancamento } = req.body;
        const retorno = await serviceLancamento.Inserir(
            id_usuario,
            descricao,
            valor,
            dt_lancamento,
            tipo,
            id_categoria,
        );
        res.status(201).json(retorno);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function Editar(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const id_lancamento = req.params.id_lancamento;
    const { descricao,valor,id_categoria, tipo, dt_lancamento } = req.body;
    const retorno = await serviceLancamento.Editar(
      id_lancamento,
      id_usuario,
      descricao,
      valor,
      dt_lancamento,
      tipo,
      id_categoria,
    );
    res.status(200).json(retorno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Excluir(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const id_lancamento = req.params.id_lancamento;

    const retorno = await serviceLancamento.Excluir(id_lancamento, id_usuario);
    res.status(200).json(retorno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Resumo(req, res) {
  try {
    
    const id_usuario = req.id_usuario;
    
    const resumo = await serviceLancamento.Resumo(id_usuario);
    res.status(201).json(resumo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { Listar, Inserir, Editar, Excluir, Resumo };
