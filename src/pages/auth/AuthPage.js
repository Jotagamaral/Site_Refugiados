import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login'); // Estado que controla o formulário exibido

  const toggleForm = (formName) => {
    setActiveForm(formName);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <header className="w-full bg-blue-300 p-5 flex justify-between items-center">
        <div className="font-bold text-xl">
          <span>Aurora</span> <span>Refúgio</span>
        </div>
        <div>
          <button onClick={() => toggleForm('login')} className="mx-2">Login</button>
          <button onClick={() => toggleForm('register')} className="mx-2">Register</button>
        </div>
      </header>

      <div className="container bg-white p-6 rounded shadow-lg">
        {activeForm === 'login' && <LoginForm toggleForm={toggleForm} />}
        {activeForm === 'register' && <RegisterForm toggleForm={toggleForm} />}
        {activeForm === 'forgotPassword' && <ForgotPasswordForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default AuthPage;
