// Exemplo de middleware de autenticação
const checkAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Acesso não autorizado' });
    }
    // Lógica para validar o token, caso exista
    next();
};

export default checkAuth;
