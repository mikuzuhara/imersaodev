var imagemFilme;
var campoFilmeFavorito = document.getElementById("filme");
campoFilmeFavorito.focus();

function adicionarFilme() {
  function listarFilmes() {
    imagemFilme = "<img src=" + filmeFavorito + ">";
    var listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML += imagemFilme;
  }

  campoFilmeFavorito.focus();
  var filmeFavorito = campoFilmeFavorito.value;
  if (filmeFavorito.startsWith("data:image/jpeg")) {
    listarFilmes();
  } else {
    alert("Isso não é uma imagem!");
  }
  campoFilmeFavorito.value = "";
}
