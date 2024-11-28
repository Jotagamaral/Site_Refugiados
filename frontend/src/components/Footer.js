import { Link } from 'react-router-dom';  // Certifique-se de que está importando corretamente

const Footer = () => {
return (
    <footer className="bg-blue-300 text-black p-10">
    <div className="container mx-auto grid grid-cols-4 gap-8">
        {/* Coluna 1: Logo e texto */}
        <div>
        <h1 className="text-2xl font-bold mb-4">Aurora Refúgio</h1>
        <p>Aurora está com você!</p>
        </div>


        <div>
        <h3 className="font-bold text-lg mb-4">Geral</h3>
        <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            
        </ul>
        </div>


        <div>
        <h3 className="font-bold text-lg mb-4">Aprendizado</h3>
        <ul className="space-y-2">
        <li><Link to="/guia" className="hover:underline">Guia</Link></li>
        </ul>
        </div>


        <div>
        <h3 className="font-bold text-lg mb-4">Usuário</h3>
        <ul className="space-y-2">
        <li><Link to="/usuario" className="hover:underline">Perfil</Link></li>
        </ul>
        </div>
    </div>
    </footer>
);
};

export default Footer;
