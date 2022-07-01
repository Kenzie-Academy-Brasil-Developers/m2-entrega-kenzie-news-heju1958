class kenzieNews {
  static requisicao() {
    fetch("https://kenzie-news-api.herokuapp.com/api/news")
      .then((response) => response.json())
      .then((data) => {
        this.template(data);
      });
  }
  static template(data) {
    const ul = document.getElementById("listaNews");
    data.forEach((elem) => {
      if (elem.id === 2) {
        this.cardPrincipal(elem);
      } else if (elem.id !== 2) {
        const liNews = document.createElement("li");
        const divNews = document.createElement("div");
        const imgNews = document.createElement("img");
        const divInfo = document.createElement("div");
        const pCategoria = document.createElement("p");
        const pTitulo = document.createElement("p");
        const pResumo = document.createElement("p");
        const pFonte = document.createElement("p");

        imgNews.src = elem.imagem;
        pCategoria.innerText = elem.categoria;
        pTitulo.innerText = elem.titulo;
        pResumo.innerText = elem.resumo;
        pFonte.innerText = elem.fonte;

        liNews.className = "li_News";
        divNews.className = "div_News";
        divInfo.className = "div_Info";

        imgNews.className = "img_News";
        pCategoria.className = "p_Categoria";
        pTitulo.className = "p_Titulo";
        pResumo.className = "p_Resumo";
        pFonte.className = "p_Fonte";

        divNews.append(imgNews);
        divInfo.append(pCategoria, pTitulo, pResumo, pFonte);
        liNews.append(divNews, divInfo);
        ul.append(liNews);
      }
    });
  }
  static cardPrincipal(elem) {
    const divPrincipal = document.getElementById("cardPrincipal");

    const divCard = document.createElement("div");
    const imgCard = document.createElement("img");
    const divInfoCard = document.createElement("div");
    const pCategoriaCard = document.createElement("p");
    const pTituloCard = document.createElement("p");
    const pResumoCard = document.createElement("p");
    const pFonteCard = document.createElement("p");

    imgCard.src = elem.imagem;
    pCategoriaCard.innerText = elem.categoria;
    pTituloCard.innerText = elem.titulo;
    pResumoCard.innerText = elem.resumo;
    pFonteCard.innerText = elem.fonte;

    divCard.className = "div_News_Card";
    divInfoCard.className = "div_Info_Card";

    imgCard.className = "img_News_Card";
    pCategoriaCard.className = "p_Categoria_Card";
    pTituloCard.className = "p_Titulo_Card";
    pResumoCard.className = "p_Resumo_Card";
    pFonteCard.className = "p_Fonte";

    divCard.append(imgCard);
    divInfoCard.append(pCategoriaCard, pTituloCard, pResumoCard, pFonteCard);
    divPrincipal.append(divCard, divInfoCard);
  }
}
kenzieNews.requisicao();
