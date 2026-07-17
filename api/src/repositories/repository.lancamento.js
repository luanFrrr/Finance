import db from "../database/sqlite.js";

const { query } = db;

async function Listar(id_usuario, dt_filtro, busca) {
    let sql = `select l.*, c.categoria, c.icone
    from lancamento l 
    join categoria c on (c.id_categoria = l.id_categoria and c.id_usuario = l.id_usuario)
    where l.id_usuario = ?`;
    
    let params = [id_usuario];

    if (busca) {
        let busca_formatada = busca.replace(/[aáàãâäAÁÀÃÂÄ]/g, '_')
                                   .replace(/[eéèêëEÉÈÊË]/g, '_')
                                   .replace(/[iíìîïIÍÌÎÏ]/g, '_')
                                   .replace(/[oóòõôöOÓÒÕÔÖ]/g, '_')
                                   .replace(/[uúùûüUÚÙÛÜ]/g, '_')
                                   .replace(/[cçCÇ]/g, '_');

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

async function Inserir(id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) {
    let sql = `INSERT INTO lancamento(id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) VALUES(?, ?, ?, ?, ?, ?) RETURNING id_lancamento`;
    const lancamento = await query(sql, [id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria]);
    return lancamento[0];
}

async function Editar(id_lancamento, id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria) {
    let sql = `UPDATE lancamento SET id_usuario = ?, descricao = ?, valor = ?, dt_lancamento = ?, tipo = ?, id_categoria = ? WHERE id_lancamento = ? AND id_usuario = ?`;
    const lancamento = await query(sql, [id_usuario, descricao, valor, dt_lancamento, tipo, id_categoria, id_lancamento, id_usuario]);
    return lancamento[0];
}

async function Excluir(id_lancamento, id_usuario) {
    let sql = `DELETE FROM lancamento WHERE id_lancamento = ? AND id_usuario = ?`;
    await query(sql, [id_lancamento, id_usuario]);
    return { id_lancamento: id_lancamento };
}

async function Resumo(id_usuario) {
    let sql = `select * from lancamento where id_usuario = ? order by id_lancamento`;
    const lancamento = await query(sql, [id_usuario]);
    return lancamento[0];
}
export default { Listar, Inserir, Editar, Excluir, Resumo };
