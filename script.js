document.addEventListener("DOMContentLoaded", function () {

  const botoes = document.querySelectorAll(".filtro-btn");
  const produtos = document.querySelectorAll(".item-catalogo");

  botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

      const filtro = this.getAttribute("data-filtro");

      botoes.forEach(function (item) {
        item.classList.remove("ativo");
      });

      this.classList.add("ativo");

      produtos.forEach(function (produto) {

        const categoria = produto.getAttribute("data-categoria");

        if (filtro === "todos" || categoria === filtro) {

          produto.classList.remove("oculto");

        } else {

          produto.classList.add("oculto");

        }

      });

    });

  });

});