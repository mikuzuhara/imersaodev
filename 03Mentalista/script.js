var numeroSorteado = parseInt(Math.random() * 11);
var quantidadeTentativas = 0;

function Chutar() {
  quantidadeTentativas++;
  pegaTentativas = document.getElementById("tentativas");
  if (quantidadeTentativas <= 3) {
    pegaTentativas.innerHTML = "" + quantidadeTentativas;
  }

  var textoResultado;
  var pegaValor = document.getElementById("valor");
  var valor = pegaValor.value;
  var chute = parseInt(valor);
  if (chute == numeroSorteado) {
    textoResultado = "Vc acertou o número";
  } else if (chute < 0 || chute > 10) {
    textoResultado = "Vc tem que digitar um número de 0 a 10";
  } else {
    textoResultado = "Errou o número, o certo é " + numeroSorteado;
  }

  var pegaResultado = document.querySelector("#resultado");
  if (quantidadeTentativas >= 3) {
    pegaValor.disabled = true;
    textoResultado += ", 3 tentativas utilizadas, vc não pode mais chutar";
  }
  pegaResultado.innerHTML = textoResultado;
}
