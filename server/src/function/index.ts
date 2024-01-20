require('dotenv').config
const SECRET_KEY = process.env.JWT_SECRET

const users = [
    { id: 1, email: "usuario1@gmail.com", password: 'senha123' },
    { id: 2, email: "usuario2@gmail.com", password: 'senha321' }
]

function autenticar(usuario, senha) {
    // Lógica de autenticação (substitua por sua própria lógica de autenticação)
    const usuarioRegistrado = usuariosRegistrados.find(u => u.usuario === usuario && u.senha === senha);
    if (usuarioRegistrado) {
      // Informações a serem incluídas no token
      const payload = {
        usuario: usuario,
        exp: Math.floor(Date.now() / 1000) + 86400, // Token expira em 1 dia (em segundos)
      };
      const token = jwt.sign(payload, SECRET_KEY);
      return token;
    } else {
      return null;
    }
  }