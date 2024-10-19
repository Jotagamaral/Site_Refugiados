import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';


const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');

  const toggleForm = (formName) => {
    setActiveForm(formName);
  };

  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className="flex items-center justify-center gap-48 pt-16 ">
        <img src="./assets/aurora.png" alt="Aurora Mascote" className="w-1/4" />
        
        <div className="bg-white p-6 my-5 rounded shadow-lg w-96">
          {activeForm === 'login' && <LoginForm toggleForm={toggleForm} />}
          {activeForm === 'register' && <RegisterForm toggleForm={toggleForm} />}
          {activeForm === 'forgotPassword' && <ForgotPasswordForm toggleForm={toggleForm} />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
