import serviceUsuario from "../service/service.usuario.js";

// Função auxiliar para validar o e-mail usando Expressão Regular (Regex)
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

async function Inserir(req, res) {
  try {
    const { nome, email, senha } = req.body;

    // Se o e-mail não for válido, para aqui mesmo e retorna erro 400
    if (!validarEmail(email)) {
      return res.status(400).json({ error: "E-mail inválido" });
    }

    const usuario = await serviceUsuario.Inserir(nome, email, senha);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Login(req, res) {
  try {
    const { email, senha } = req.body;
    const usuario = await serviceUsuario.Login(email, senha);

    if (usuario.length === 0) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    } else {
      res.status(200).json(usuario);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Perfil(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const usuario = await serviceUsuario.Perfil(id_usuario);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Editar(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const { nome, email } = req.body;

    // Se o e-mail não for válido, para aqui mesmo e retorna erro 400
    if (!validarEmail(email)) {
      return res.status(400).json({ error: "E-mail inválido" });
    }

    const usuario = await serviceUsuario.Editar(id_usuario, nome, email);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function Senha(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const { senha } = req.body;
    const usuario = await serviceUsuario.Senha(id_usuario, senha);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { Inserir, Login, Perfil, Editar, Senha };
