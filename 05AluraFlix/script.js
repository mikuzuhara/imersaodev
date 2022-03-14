var campoFilmeFavorito = document.getElementById("filme");
var campoNomeFilme = document.getElementById("nomeFilme");
var filmeFavorito, nomeFilme;

campoFilmeFavorito.focus();
var listaFilmes = [];
var vetorFilmes = document.getElementById("listaFilmes");

function adicionarFilme() {
  function listarFilmes() {
    function createDeleteButton(index) {
      function deleteRegister() {
        listaFilmes.splice(index, 1);
        listarFilmes();
      }
      var button = document.createElement("button");
      button.classList.add("deleteButton");
      button.textContent = "x";
      button.addEventListener("click", deleteRegister);

      return button;
    }
    function createSpan(name) {
      var span = document.createElement("span");
      span.textContent = name;

      return span;
    }
    vetorFilmes.innerHTML = "";
    for (var i = 0; i < listaFilmes.length; i++) {
      var image = document.createElement("img");
      image.src = listaFilmes[i][0];

      var div = document.createElement("div");
      div.classList.add("registro");
      var divGrade = document.createElement("div");
      divGrade.classList.add("divName");

      var span = createSpan(listaFilmes[i][1]);
      var button = createDeleteButton(i);

      divGrade.appendChild(button);
      divGrade.appendChild(span);

      div.appendChild(image);
      div.appendChild(divGrade);
      vetorFilmes.appendChild(div);
    }
  }

  var registro = [];
  campoFilmeFavorito.focus();
  filmeFavorito = campoFilmeFavorito.value;
  nomeFilme = campoNomeFilme.value;

  if (filmeFavorito.startsWith("data:image/jpeg")) {
    registro.push(filmeFavorito);
    registro.push(nomeFilme);
    listaFilmes.push(registro);
    listarFilmes();
  } else {
    alert("Isso não é uma imagem!");
  }
  clearInput();
}

function clearInput() {
  document.getElementById("filme").value = "";
  document.getElementById("nomeFilme").value = "";
  document.getElementById("filme").focus();
}
