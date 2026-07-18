import db from "../database/sqlite.js";

const { query } = db;

async function Listar(id_usuario, dt_filtro, busca) {
  let sql = `select l.*, c.categoria, c.icone
    from lancamento l 
    join categoria c on (c.id_categoria = l.id_categoria and c.id_usuario = l.id_usuario)
    where l.id_usuario = ?`;

  let params = [id_usuario];

  if (busca) {
    let busca_formatada = busca
      .replace(/[aáàãâäAÁÀÃÂÄ]/g, "_")
      .replace(/[eéèêëEÉÈÊË]/g, "_")
      .replace(/[iíìîïIÍÌÎÏ]/g, "_")
      .replace(/[oóòõôöOÓÒÕÔÖ]/g, "_")
      .replace(/[uúùûüUÚÙÛÜ]/g, "_")
      .replace(/[cçCÇ]/g, "_");

    sql += ` and (l.descricao like ? or c.categoria like ?)`;
    params.push(`%${busca_formatada}%`, `%${busca_formatada}%`);
  }

  if (dt_filtro) {
    // Traga onde a data seja MAIOR ou IGUAL ao PRIMEIRO dia do mês
    // E MENOR ou IGUAL ao ÚLTIMO dia do mês
    sql += ` 
            and l.dt_lancamento >= date(?, 'start of month') 
            and l.dt_lancamento <= date(?, 'start of month', '+1 month', '-1 day') 
        `;

    // Passa a variável duas vezes, uma para cada interrogação (?)
    params.push(dt_filtro);
    params.push(dt_filtro);
  }

  sql += ` order by l.dt_lancamento desc, l.id_lancamento desc`;

  const lancamento = await query(sql, params);
  return lancamento;
}

async function Inserir(
  id_usuario,
  descricao,
  valor,
  dt_lancamento,
  tipo,
  id_categoria,
) {
  if (
    id_categoria === undefined ||
    id_categoria === null ||
    id_categoria === ""
  ) {
    throw new Error("id_categoria é obrigatório para inserir um lançamento.");
  }

  let sql = `INSERT INTO lancamento(id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) VALUES(?, ?, ?, ?, ?, ?) RETURNING id_lancamento`;
  const lancamento = await query(sql, [
    id_usuario,
    descricao,
    valor,
    dt_lancamento,
    tipo,
    id_categoria,
  ]);
  return lancamento[0];
}

async function Editar(
  id_lancamento,
  id_usuario,
  descricao,
  valor,
  dt_lancamento,
  tipo,
  id_categoria,
) {
  let sql = `UPDATE lancamento SET descricao = ?, valor = ?, dt_lancamento = ?, tipo = ?`;
  const params = [descricao, valor, dt_lancamento, tipo];

  if (
    id_categoria !== undefined &&
    id_categoria !== null &&
    id_categoria !== ""
  ) {
    sql += `, id_categoria = ?`;
    params.push(id_categoria);
  }

  sql += ` WHERE id_lancamento = ? AND id_usuario = ?`;
  params.push(id_lancamento, id_usuario);

  await query(sql, params, "run");

  return { id_lancamento: id_lancamento };
}

async function Excluir(id_lancamento, id_usuario) {
  let sql = `DELETE FROM lancamento WHERE id_lancamento = ? AND id_usuario = ?`;
  await query(sql, [id_lancamento, id_usuario]);
  return { id_lancamento: id_lancamento };
}

async function Resumo(id_usuario) {
  let sql = `select
    sum(case when l.tipo = 'R' then l.valor else 0 end) as Receitas,
    sum(case when l.tipo = 'D' then l.valor else 0 end) as Despesas
    from lancamento l
    where l.id_usuario = ?      
    and l.dt_lancamento >= date('now', 'start of month')
    and l.dt_lancamento <= date('now', 'start of month', '+1 month', '-1 day');`;
  const somas = await query(sql, [id_usuario]);

  //--------------------------------------------

  sql = `select l.*, c.categoria, c.icone
    from lancamento l 
    join categoria c on (c.id_categoria = l.id_categoria and c.id_usuario = l.id_usuario)
    where l.id_usuario = ?
    order by l.dt_lancamento desc
    limit 10;`;
  const lancamento = await query(sql, [id_usuario]);

  //--------------------------------------------

  let retorno = {
    totais: somas[0],
    lancamentos: lancamento,
  };
  return retorno;
}
export default { Listar, Inserir, Editar, Excluir, Resumo };
