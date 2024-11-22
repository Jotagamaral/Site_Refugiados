import React, { useState, useEffect } from "react";
import "./index.css"; // Arquivo CSS para estilização

function NoticiasIBGE() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const imagemPadrao = "https://via.placeholder.com/400"; // URL de uma imagem padrão

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias");
        if (!response.ok) throw new Error("Erro ao buscar notícias");
        const data = await response.json();
        setNoticias(data.items); // 'items' contém as notícias
      } catch (error) {
        console.error("Erro ao buscar notícias do IBGE:", error);
        setErro("Não foi possível carregar as notícias. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (loading) {
    return <p>Carregando notícias...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  // Limitar as notícias a apenas 10
  const noticiasLimitadas = noticias.slice(0, 10);

  return (
    <div className="noticias-container">
      <h1>Notícias do IBGE</h1>
      <div className="cards-container">
        {noticiasLimitadas.map((noticia, index) => (
          <div key={index} className="card">
            <img
              src={noticia.imagem || imagemPadrao}
              alt={noticia.titulo}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{noticia.titulo}</h2>
              <p className="card-description">{noticia.introducao}</p>
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Leia mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticiasIBGE;
