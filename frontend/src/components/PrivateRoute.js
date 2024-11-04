import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('authToken');  // Verifica se o token está presente

  console.log('PrivateRoute.js | Autenticação do Usuário:', isAuthenticated.slice(0,50))

  return isAuthenticated ? <Component /> : <Navigate to="/auth" />;  // Redireciona se não estiver logado
};

export default PrivateRoute;
