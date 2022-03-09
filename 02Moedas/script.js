function Converter() {
  var pegaElemento = document.getElementById("valor");
  var valor = pegaElemento.value;
  var valorEmReal = parseFloat(valor);

  var pegaOpcao = document.querySelector('input[name="moeda"]:checked');
  var moeda = pegaOpcao.value;
  console.log(moeda);
  var valorConvertido;
  var textoResultado;
  if (moeda == "dolar") {
    valorConvertido = valorEmReal / 5;
    textoResultado = "O valor em dólares é US$ " + valorConvertido.toFixed(2);
  }
  if (moeda == "euro") {
    valorConvertido = valorEmReal / 6;
    textoResultado =
      "O valor em euros é " + valorConvertido.toFixed(2) + " euros";
  }

  var pegaResultado = document.getElementById("valorConvertido");
  pegaResultado.innerHTML = textoResultado;
}
