import axios from "axios";

export const getNoticiasCNN = async (req, res) => {
  try {
    // Faz a requisição à API externa da CNN
    const response = await axios.get("https://www.cnnbrasil.com.br/tudo-sobre/refugiados/");

    console.log(response.data);
    res.json(response.data)

    
    // Supondo que a resposta da API tenha um JSON estruturado
    const noticias = response.data.map((noticia) => ({
      titulo: noticia.titulo,
      imagem: noticia.imagem, // URL da imagem
      link: noticia.link, // URL para ler mais
    }));

    res.json(noticias);
  } catch (error) {
    console.error("Erro ao buscar notícias da CNN:", error.message);
    res.status(500).json({ error: "Erro ao buscar notícias." });
  }
};

export const getNoticiasGoogle = async (req, res) => {

  const apiKey = "06d654339bf84c4288e7bce740f82a84";
  const url = `https://newsapi.org/v2/everything?q=refugiados&language=pt&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

  try {
    // Faz a requisição à API de notícias
    const response = await axios.get(url);

    // Extrai as notícias do campo 'articles'
    const noticias = response.data.articles.map((noticia) => ({
      titulo: noticia.title,
      descricao: noticia.description,
      imagem: noticia.urlToImage || "https://via.placeholder.com/400",
      link: noticia.url,
    }));

    // Retorna as notícias para o frontend
    res.json(noticias);
  } catch (error) {
    console.error("Erro ao buscar notícias:", error.message);
    res.status(500).json({
      error: "Não foi possível carregar as notícias. Tente novamente mais tarde.",
    });
  }
};
