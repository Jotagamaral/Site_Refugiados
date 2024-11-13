import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('authToken');  // Verifica se o token está presente

  //console.log('PrivateRoute.js | Autenticação do Usuário:', isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="/auth/login" />;  // Redireciona se não estiver logado
};

export default PrivateRoute;
