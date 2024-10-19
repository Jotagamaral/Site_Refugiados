import React, { useState } from 'react';
import { supabase } from "../../supabaseCliente";

const RegisterForm = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleRegister = async () => {

      if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
      }
    
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password
        });
    
        if (error) throw error;
    
        const userId = data.user?.id;

        if (userId) {
          const { error: insertError } = await supabase
          .schema('aurora_refugio')
          .from('users')
          .insert({
            auth_user_id: userId,
            name: name,
            email: email,
            location: location
          });
          
          
          if (insertError) throw insertError;
          else {
            toggleForm('login');
            console.log('Usuário registrado com sucesso!');
          }
        }
      } catch (error) {
        alert('Mensagem de erro: ' + error.message);
      }
  };

  return (
    <div className=''>
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <label className="block mb-2">Usuário:</label>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Email:</label>
      <input
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Localização:</label>
      <input
        type="text"
        placeholder="Brasília"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Senha:</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <label className="block mb-2">Confirmar senha:</label>
      <input
        type="password"
        placeholder="********"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button onClick={handleRegister} className="w-full bg-green-500 text-white p-2 rounded">
        Registrar
      </button>
      <div className="text-center mt-4">
        <button  onClick={() => toggleForm('login')} className="text-sm text-gray-500">Já possui conta?</button>
      </div>
    </div>
  );
};

export default RegisterForm;