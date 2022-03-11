listaFilmes = [];
var listaFrame = document.getElementById("lista");
var avisoElemento = document.querySelector(".page-subtitle");

function Inserir() {
  var enderecoURL = document.getElementById("endereco").value;

  for (var i = 0; i < listaFilmes.length; i++) {
    if (enderecoURL == listaFilmes[i]) {
      console.log("entrou");
      avisoElemento.innerHTML =
        "Você já inseriu esse filme, insira outro filme";
      return;
    }
  }
  avisoElemento.innerHTML = "";
  listaFilmes.push(enderecoURL);
  var marcacaoImagem =
    "<img src=" + enderecoURL + ' hspace = "20" vspace = "20">';
  listaFrame.innerHTML += marcacaoImagem;
}
