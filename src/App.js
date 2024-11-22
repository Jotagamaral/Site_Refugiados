import React from "react";
import NoticiasIBGE from "./NoticiasIBGE";
import NoticiasGoogle from "./NoticiasGoogle";
import "./index.css"; 

function Noticias() {
  return (
    <div>
      <h1>Notícias</h1>

      {/* Seção 1: Notícias do IBGE */}
      <section>
        <h2>Notícias do IBGE</h2>
        <NoticiasIBGE />
      </section>

      {/* Seção 2: Notícias de Refugiados (Google News) */}
      <section>
        <h2>Notícias sobre Refugiados</h2>
        <NoticiasGoogle />
      </section>
    </div>
  );
}

export default Noticias;
