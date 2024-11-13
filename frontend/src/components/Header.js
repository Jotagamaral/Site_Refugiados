import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaQuestionCircle, FaBook, FaUser, FaSignInAlt, FaSignOutAlt, FaLanguage } from 'react-icons/fa';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const location = useLocation();
  const popUpRef = useRef(null);

  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogOut = async () => {
    alert('Usuário deslogado!');
    setIsLoggedIn(false); 
    setShowPopup(false);
    localStorage.removeItem('authToken');
    navigate('/auth');
  };


  // Monitora mudanças de `authToken` e atualiza `isLoggedIn`
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
    //console.log('HEADER | Logado:', isLoggedIn)
  }, [isLoggedIn]); // dependência para refletir alterações

  // Fechar o pop-up ao clicar fora da área
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popUpRef]);

  // Fechar o pop-up ao redirecionar
  useEffect(() => {
    setShowPopup(false);
  }, [location]);

  return (
    <header className="bg-blue-300 p-5 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-4xl text-black font-bold pl-5">Aurora Refúgio</h1>
      </div>
      <nav className="nav flex items-center">
        <button className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200 flex items-center">
          <FaLanguage className="mr-2" />
          Language
        </button>
        <Link to="/" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200 flex items-center">
          <FaHome className="mr-2" />
          Home
        </Link>
        <Link to="/guia" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200 flex items-center">
          <FaBook className="mr-2" />
          Guia
        </Link>
        <Link to="/faq" className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200 flex items-center">
          <FaQuestionCircle className="mr-2" />
          FAQ
        </Link>
        
        <div className="relative">
          <button
            onClick={togglePopup}
            className="bg-white px-4 py-2 rounded ml-3 font-bold text-gray-700 hover:bg-gray-200 flex items-center"
          >
            <FaUser className="mr-2" />
            Conta
          </button>

          {showPopup && (
            <div ref={popUpRef} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <ul>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/usuario"
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setShowPopup(false)}
                      >
                        <FaUser className="mr-2" />
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      >
                        <FaSignOutAlt className="mr-2" />
                        Log Out
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to="/auth"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setShowPopup(false)}
                    >
                      <FaSignInAlt className="mr-2" />
                      Log In
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
