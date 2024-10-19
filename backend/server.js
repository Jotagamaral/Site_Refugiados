const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware para entender requisições JSON
app.use(express.json());

// Rota inicial de exemplo
app.get('/', (req, res) => {
  res.send('Back-end funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
