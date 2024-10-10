// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Certifique-se de que está usando o export default corretamente

import FAQ from './pages/FAQ';  // Importando a nova página FAQ
import Home from './pages/Home'; // Página Home (caso tenha)
import Guia from './pages/Guia'; // Página Guia (caso tenha)
import FormPage from './pages/FormPage'; // Importar a página de formulário
import AuthPage from './pages/auth/AuthPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/guia" element={<Guia />} />
        <Route path="/form/:title" element={<FormPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/usuario" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
