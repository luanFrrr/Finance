import repoLancamento from "../repositories/repository.lancamento.js";

async function Listar(id_usuario, dt_filtro, busca) {
  const lancamentos = await repoLancamento.Listar(id_usuario, dt_filtro, busca);

  return lancamentos;
}

async function Inserir(id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) {
  const lancamento = await repoLancamento.Inserir(id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria);

  return lancamento;
}

async function Editar(id_lancamento, id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) {
  const lancamento = await repoLancamento.Editar(
    id_lancamento,
    id_usuario,
    descricao,
    valor,
    dt_lancamento,
    tipo,
    id_categoria,
  );
  return lancamento;
}

async function Excluir(id_lancamento, id_usuario) {
  const lancamento = await repoLancamento.Excluir(id_lancamento, id_usuario);
  return lancamento;
}

async function Resumo(id_usuario) {
  const resumo = await repoLancamento.Resumo(id_usuario);
  return resumo;
}

export default { Listar, Inserir, Editar, Excluir, Resumo };
