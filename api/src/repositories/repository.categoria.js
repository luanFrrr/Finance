import db from "../database/sqlite.js";

const { query } = db;

async function Listar(id_usuario) {
  let sql = `select * from categoria where id_usuario = ? order by categoria`;
  const categoria = await query(sql, [id_usuario]);
  return categoria;
}

async function Inserir(id_usuario, categoria, icone) {
  let sql = `INSERT INTO categoria(id_usuario, categoria, icone) VALUES(?, ?, ?) RETURNING id_categoria, categoria, icone`;
  const result = await query(sql, [id_usuario, categoria, icone]);
  return result[0];
}

async function Editar(id_categoria, id_usuario, categoria, icone) {
  let sql = `UPDATE categoria SET categoria = ?, icone = ? WHERE id_categoria = ? AND id_usuario = ?`;
  await query(sql, [categoria, icone, id_categoria, id_usuario]);

  return { id_categoria: id_categoria };
}

async function Excluir(id_categoria, id_usuario) {
  let sql = `DELETE FROM categoria WHERE id_categoria = ? AND id_usuario = ?`;
  await query(sql, [id_categoria, id_usuario]);

  return { id_categoria: id_categoria };
}

export default { Inserir, Listar, Editar, Excluir };
