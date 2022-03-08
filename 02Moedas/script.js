function Converter() {
  var pegaElemento = document.getElementById("valor");
  var valor = pegaElemento.value;
  var valorEmReal = parseFloat(valor);

  var valorEmDolar = valorEmReal / 5;

  pegaValorConvertido = document.getElementById("valorConvertido");
  textoResultado = "O valor em dólar é US$ " + valorEmDolar.toFixed(2);
  pegaValorConvertido.innerHTML = textoResultado;
}
