from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/api/noticias-cnn", methods=["GET"])
def get_noticias_cnn():
    url = "https://www.cnnbrasil.com.br/tudo-sobre/refugiados/"
    response = requests.get(url)
    
    if response.status_code != 200:
        return jsonify({"error": "Não foi possível acessar a página da CNN"}), 500
    
    soup = BeautifulSoup(response.content, "html.parser")

    noticias = []

    for item in soup.find_all("article"):
        titulo_tag = item.find("h2")
        link_tag = item.find("a")
        imagem_tag = item.find("img")

        titulo = titulo_tag.get_text(strip=True) if titulo_tag else "Sem título"
        link = link_tag["href"] if link_tag and link_tag.get("href") else "#"
        
        # Verifica se o link é completo
        if not link.startswith("http"):
            link = f"https://www.cnnbrasil.com.br{link}"

        imagem = imagem_tag["src"] if imagem_tag else None

        noticias.append({
            "titulo": titulo,
            "link": link,
            "imagem": imagem
        })

    return jsonify(noticias)

if __name__ == "__main__":
    app.run(debug=True)
