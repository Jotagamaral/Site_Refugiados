import express from 'express';
import guideRoutes from './routes/guideRoutes.mjs'; // Importa as rotas dos guias


const app = express();

// Middleware para parsing de JSON
app.use(express.json());

// Usa as rotas dos guias
app.use('/api', guideRoutes);

// Inicializa o servidor na porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
