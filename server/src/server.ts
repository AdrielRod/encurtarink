const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser")
const {autenticar} = require('./function/index')

const app = express()
const port = 3000



app.use(bodyParser.json())

app.get('/login', (req, res) => {
    const { email, password } = req.body
    const user = users.find(u => u.email === email);


    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '24h' });

    res.json({ message: "Acesso liberado", token })
})

app.get('/dados-protegidos', (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    // Verificar o token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }

        // Decodificado com sucesso.
        const { userId, email } = decoded;

        // Você pode usar o ID do usuário ou o email conforme necessário
        res.json({ message: 'Acesso permitido', userId, email });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

