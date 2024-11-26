import React, { useState, useEffect } from "react";
import ContentCard from "../../components/ContentCard";
import config from '../../config';

const NewsSection = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(`${config.API_URL}/news/noticias-google`);
        const data = await response.json();

        // Filtra notícias inválidas (com [Removed])
        const noticiasValidas = data.filter(
          noticia =>
            noticia.titulo !== "[Removed]" &&
            noticia.descricao !== "[Removed]" &&
            noticia.link !== "[Removed]"
        );

        setNoticias(noticiasValidas);
      } catch (error) {
        console.error("Erro ao buscar notícias do backend:", error);
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
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Notícias</h2>
      <div className="grid grid-cols-3 gap-10">
        {noticias.map((noticia, index) => (
          <ContentCard
            key={index}
            imgSrc={noticia.imagem}
            title={noticia.titulo}
            description={noticia.descricao || "Descrição não disponível."}
            width="w-64"
            link={noticia.link} // Passa o link da notícia
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
