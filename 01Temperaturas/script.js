function Converter() {
  var pegaElemento = document.getElementById("fahrenheit");
  var valor = pegaElemento.value;
  var valorEmFarenheit = parseFloat(valor);

  var valorEmCelsius = (5 / 9.0) * (valorEmFarenheit - 32);

  var pegaResultado = document.getElementById("resultado");
  var textoResultado = valorEmCelsius.toFixed(2) + " °C";
  pegaResultado.innerHTML = textoResultado;
}
