import './index.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home'; 
import Guia from './pages/Guia'; 
import FormPage from './pages/FormPage'; 
import FAQ from './pages/FAQ';
import AuthPage from './pages/auth/AuthPage';
import Usuario from './pages/Usuario';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return ( 
  <Router>
    <Header />
  
    <Routes>
      
      {/*ROTAS ABERTAS*/ }
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/auth" element={<AuthPage />} />

      {/*ROTAS PRIVADAS*/ }
      <Route path="/guia" element={<PrivateRoute component={Guia} />} />
      <Route path="/form/:id/:title" element={<PrivateRoute component={FormPage} />} />
      <Route path="/usuario" element={<PrivateRoute component={Usuario} />} />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  </Router>
    )

}

export default App;