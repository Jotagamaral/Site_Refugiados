import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function NoticiasRefugiados() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const apiKey = "06d654339bf84c4288e7bce740f82a84"; 
  const url = `https://newsapi.org/v2/everything?q=refugiados&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(url);
        setNoticias(response.data.articles); // 'articles' contém as notícias
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
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

  return (
    <div className="noticias-container">
      <h1>Notícias sobre Refugiados</h1>
      <div className="cards-container">
        {noticias.map((noticia, index) => (
          <div key={index} className="card">
            <img
              src={noticia.urlToImage || "https://via.placeholder.com/400"}
              alt={noticia.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{noticia.title}</h2>
              <p className="card-description">{noticia.description}</p>
              <a
                href={noticia.url}
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

export default NoticiasRefugiados;
