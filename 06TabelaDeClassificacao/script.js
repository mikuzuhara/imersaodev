var paulo = { nome: "Paulo", vitorias: 2, empates: 2, derrotas: 1 };
var rafa = { nome: "Rafa", vitorias: 1, empates: 2, derrotas: 2 };

var jogadores = [paulo, rafa];

var pergunta = document.getElementById("pergunta");
var grade = document.getElementById("grade");

var selecao = document.createElement("select");

function calculaPontos(indice) {
  var pontos = jogadores[indice].vitorias * 3 - jogadores[indice].derrotas;
  return pontos;
}

function listaJogadores() {
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  var elemento = "";
  var indiceMaiorPontos = identificaMaiorPontos();
  for (var i = 0; i < jogadores.length; i++) {
    if (i == indiceMaiorPontos)
      elemento +=
        "<tr><td id='primeiro'><img src='https://s1.trrsf.com/update-1634310421/fe/zaz-app-t360-financial/_img/flags/dollar.png'><span>" +
        jogadores[i].nome +
        "</span></td>";
    else elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + calculaPontos(i) + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button><td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button><td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button><td>";
  }
  tabelaJogadores.innerHTML = elemento;
}

function adicionarJogador() {
  var nomeJogador = prompt("Digite nome do jogador?", "Nome do jogador");
  var jogador = new Object();
  jogador.nome = nomeJogador;
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;

  jogadores.push(jogador);
  listaJogadores();
}

function adicionarVitoria(indice) {
  function aumentarDerrotas() {
    for (var i = 0; i < jogadores.length; i++) {
      if (jogadores[i].nome == selecao.options[selecao.selectedIndex].value) {
        jogadores[i].derrotas++;
        jogadores[indice].vitorias++;
        break;
      }
    }
    listaJogadores();
    limpaGrade(j);
  }

  var span = createSpan("Quem foi derrotado?");
  var j = 0;
  for (var i = 0; i < jogadores.length; i++) {
    if (i != indice) {
      var opt = document.createElement("option");
      opt.value = jogadores[i].nome;
      opt.text = jogadores[i].nome;
      selecao.add(opt, selecao.options[j]);
    }
    j++;
  }

  var button = document.createElement("button");
  button.textContent = "Responder";
  button.addEventListener("click", aumentarDerrotas);

  grade.appendChild(span);
  grade.appendChild(selecao);
  grade.appendChild(button);
}

function adicionarEmpate(indice) {
  function aumentarEmpates() {
    for (var i = 0; i < jogadores.length; i++) {
      if (jogadores[i].nome == selecao.options[selecao.selectedIndex].value) {
        jogadores[i].empates++;
        jogadores[indice].empates++;
        break;
      }
    }
    listaJogadores();
    limpaGrade(j);
  }

  var span = createSpan("Empatou com quem?");
  var j = 0;
  for (var i = 0; i < jogadores.length; i++) {
    if (i != indice) {
      var opt = document.createElement("option");
      opt.value = jogadores[i].nome;
      opt.text = jogadores[i].nome;
      selecao.add(opt, selecao.options[j]);
    }
    j++;
  }

  var button = document.createElement("button");
  button.textContent = "Responder";
  button.addEventListener("click", aumentarEmpates);

  grade.appendChild(span);
  grade.appendChild(selecao);
  grade.appendChild(button);
}

function adicionarDerrota(indice) {
  function aumentarVitorias() {
    for (var i = 0; i < jogadores.length; i++) {
      if (jogadores[i].nome == selecao.options[selecao.selectedIndex].value) {
        jogadores[i].vitorias++;
        jogadores[indice].derrotas++;
        break;
      }
    }
    listaJogadores();
    limpaGrade(j);
  }

  var span = createSpan("Quem venceu?");
  var j = 0;
  for (var i = 0; i < jogadores.length; i++) {
    if (i != indice) {
      var opt = document.createElement("option");
      opt.value = jogadores[i].nome;
      opt.text = jogadores[i].nome;
      selecao.add(opt, selecao.options[j]);
    }
    j++;
  }

  var button = document.createElement("button");
  button.textContent = "Responder";
  button.addEventListener("click", aumentarVitorias);

  grade.appendChild(span);
  grade.appendChild(selecao);
  grade.appendChild(button);
}

function createSpan(frase) {
  var span = document.createElement("span");
  span.textContent = frase;

  return span;
}

function limpaGrade(j) {
  grade.innerHTML = "";
  for (var i = 0; i < j; i++) {
    selecao.remove(0);
  }
}

function identificaMaiorPontos() {
  var indiceDoMaior = 0;
  var pontosCorrentes;
  var maiorPontos = calculaPontos(0);
  for (var i = 1; i < jogadores.length; i++) {
    pontosCorrentes = calculaPontos(i);
    if (pontosCorrentes > maiorPontos) {
      maiorPontos = pontosCorrentes;
      indiceDoMaior = i;
    }
  }
  return indiceDoMaior;
}

listaJogadores();
