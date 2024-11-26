import React, { useState, useEffect } from "react";

function NoticiasCNN() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch("https://www.cnnbrasil.com.br/tudo-sobre/refugiados/");
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao buscar notícias da CNN:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <div>
      <h1>Notícias sobre Refugiados - CNN Brasil</h1>
      <ul>
        {noticias.map((noticia, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h2>{noticia.titulo}</h2>
            {noticia.imagem && (
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            )}
            <a href={noticia.link} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoticiasCNN;
