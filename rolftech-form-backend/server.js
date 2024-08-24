const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'r.ferrazmariucci@gmail@gmail.com', // Substitua pelo seu email
        pass: '' // Substitua pela sua senha
    }
});

app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'r.ferrazmariucci@gmail.com', // Seu email
        subject: `Contato através do site: ${subject}`,
        text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
