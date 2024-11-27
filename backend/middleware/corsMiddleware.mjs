import cors from 'cors';

const corsOptions = {
    origin: '*', // Permitindo todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export const setupCORS = (app) => {
    app.use(cors(corsOptions));
};
