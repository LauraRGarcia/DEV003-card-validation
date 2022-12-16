import validator from './validator.js';



document.querySelector(".btnEnviar").addEventListener("click", function (event) {
  event.preventDefault();

  const tarjetaDeCredito = document.getElementById("inputDeNumero").value;

  if (validator.isValid(tarjetaDeCredito)) {
    return alert("TARJETA APROBADA,PAGO EXITOSO" + validator.maskify(tarjetaDeCredito));
  } else {
    return alert(" TARJETA INVÁLIDA!");
  }
});













