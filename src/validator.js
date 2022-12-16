function validarLuhn(numeroTarjetaCredito) {
  const n = numeroTarjetaCredito.length;

  let suma = 0;
  let segundoElemento = false;
  for (let i = n - 1; i >= 0; --i) {
    let digito = parseInt(numeroTarjetaCredito.charAt(i));

    if (segundoElemento) {
      digito *= 2;
    }

    if (digito >= 10) {
      digito = String(digito);
      digito = parseInt(digito.charAt(0)) + parseInt(digito.charAt(1));
    }

    suma += digito;

    segundoElemento = !segundoElemento;
  }

  return suma % 10 === 0;
}

function sonNumeros(numeroTarjetaCredito) {
  for (const c of numeroTarjetaCredito) {
    if (!Number.isInteger(Number.parseInt(c))) {
      return false;
    }
  }

  return true;
}

const validator = {
  maskify: function (numeroDeTarjetaCredito) {
    if (numeroDeTarjetaCredito.length <= 5) {
      return "#".repeat(numeroDeTarjetaCredito.length - 1) + numeroDeTarjetaCredito.slice(-4);
    } else if (numeroDeTarjetaCredito.length > 5) {
      return "#".repeat(numeroDeTarjetaCredito.length - 4) + numeroDeTarjetaCredito.slice(-4);
    }
  },
  isValid: function (numeroTarjetaCredito) {
    if (!sonNumeros(numeroTarjetaCredito)) {
      return false;
    }

    if (parseInt(numeroTarjetaCredito) < 1) {
      return false;
    }

    return validarLuhn(numeroTarjetaCredito);
  }
};


export default validator;

