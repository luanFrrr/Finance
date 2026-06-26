import jwt from "jsonwebtoken";

const secretToken = process.env.JWT_SECRET;


function CreateJWT(id_usuario) {
  const token = jwt.sign({ id_usuario }, secretToken, { expiresIn: 999999 });
  return token;
}

function ValidateJWT(req, res, next) {
  const authToken = req.headers["authorization"];

  if (!authToken) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  
  const [, token] = authToken.split(" ");

  jwt.verify(token, secretToken, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido" });
    }

    req.id_usuario = decoded.id_usuario;
    next();
  });
}

export default { CreateJWT, ValidateJWT };
