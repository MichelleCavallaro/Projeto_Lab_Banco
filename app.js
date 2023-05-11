const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/', async (req, res) => {
  res.send('pagina inicial');
});

app.post('/cadastrar', async (req, res) => {
  await User.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: 'usuario cadastrado com sucesso',
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        erro: true,
        mensagem: 'erro: usuario não cadastrado com sucesso',
      });
    });
});

app.listen(8080, () => {
  console.log('servidor iniciado na porta 8080: http://localhost:8080');
});
