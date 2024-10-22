import express from 'express';
import guideRoutes from './routes/guideRoutes.mjs'; // Importa as rotas dos guias
import authRoutes from './routes/authRoutes.mjs'
import { setupCORS } from './middleware/corsMiddleware.mjs';


const app = express();

setupCORS(app)

// Middleware para parsing de JSON
app.use(express.json());

// ROTA DE GUIAS
app.use('/api', guideRoutes);

// ROTA DE USUARIO
app.use('/api/auth', authRoutes);

// SERVER PORT: 5000
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
