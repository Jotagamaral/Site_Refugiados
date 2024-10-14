import './index.css'
import { useState, useEffect, Profiler } from 'react'
import { supabase } from "./supabaseCliente";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Certifique-se de que está usando o export default corretamente

import FAQ from './pages/FAQ';  // Importando a nova página FAQ
import Home from './pages/Home'; // Página Home (caso tenha)
import Guia from './pages/Guia'; // Página Guia (caso tenha)
import FormPage from './pages/FormPage'; // Importar a página de formulário
import AuthPage from './pages/auth/AuthPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'


export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
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
    )
  }
  else {
    return (<Router>
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
            )
  }
}