import db from "../database/sqlite.js";

const { query } = db;

async function Inserir(nome, email, senha) {
  let sql = `INSERT INTO usuario(nome, email, senha) VALUES(?, ?, ?) RETURNING id_usuario, nome, email`;
  const result = await query(sql, [nome, email, senha]);
  return result[0];
}

async function ListarByEmail(email) {
  let sql = `select * from usuario where email = ?`;
  const usuario = await query(sql, [email]);
  if (usuario.length === 0) {
    return [];
  } else {
    return usuario[0];
  }
}

async function ListarById(id_usuario) {
  let sql = `select * from usuario where id_usuario = ?`;
  const usuario = await query(sql, [id_usuario]);
  
  
  if (usuario.length === 0) {
    return [];
  } else {
    return usuario[0];
  }
}

async function Editar(id_usuario, nome, email) {
  let sql = `UPDATE usuario SET nome = ?, email = ? WHERE id_usuario = ?`;
  await query(sql, [nome, email, id_usuario]);

  return { id_usuario: id_usuario };

}

async function Senha(id_usuario, senha) {
  let sql = `UPDATE usuario SET senha = ? WHERE id_usuario = ?`;
  await query(sql, [senha, id_usuario]);

  return { id_usuario };
}

export default { Inserir, ListarByEmail, ListarById, Editar, Senha };
