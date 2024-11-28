import React, { useState } from 'react';
import config from '../../config'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${config.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Erro no login');
      } else {
        const mockToken = result.session.access_token;
        localStorage.setItem('authToken', mockToken);
  
        console.log('Usuário Logado com sucesso:', mockToken);
        console.log(result.session);
  
        navigate('/'); // Navega para a página principal
        window.location.reload(); // Recarrega a página para garantir atualização
      }
    } catch (error) {
      alert(error.message || 'Erro ao tentar fazer login');
    }
  };
  

  return (
    <form onSubmit={handleLogin}>
      <h2 className="text-2xl font-bold mb-4 text-center">Fazer login</h2>
      <label className="block mb-2">Usuário:</label>
        <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />

      <label className="block mb-2">Senha:</label>
        <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
        required
      />

      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
        Log In
      </button>

      <div className="text-center mt-4">
        <button onClick={() => toggleForm('register')} className="text-sm text-gray-500">Não possui conta?</button>
      </div>

      <div className="text-center mt-4">
        <button onClick={() => toggleForm('forgotPassword')} className="text-sm text-gray-500">Esqueceu a senha?</button>
      </div>
    </form>
  );
};

export default LoginForm;
