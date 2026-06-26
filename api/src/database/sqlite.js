import "dotenv/config"
import sqlite3 from "sqlite3"

const SQLite = sqlite3.verbose(); 


function query (command, params, method = 'all'){
    return new Promise((resolve, reject) => {
      db[method](command, params, function(error, result) {
        if (error) reject(error)
        else resolve(result)
      })  
    })
}

const db = new SQLite.Database(process.env.DATABASE_URL, sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        console.log("Erro ao conectar com o banco de dados " + err.message);
    } else {
        db.run("PRAGMA foreign_keys = ON;");
    }
})


export default { query, db }