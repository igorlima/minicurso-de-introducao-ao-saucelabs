(function (global) {
  global.Calculadora = {

    somar: function() {
      var soma = 0, i = undefined;
      for( i=0; i < arguments.length; i++ ) {
        soma += +arguments[i];
      }
      return soma;
    },

    subtrair: function(numero1, numero2) {
      return numero1 - numero2;
    },

    multiplicar: function() {
      var multiplicacao = arguments[0], i = undefined;
      for( i=1; i < arguments.length; i++ ) {
        multiplicacao *= arguments[i];
      }
      return multiplicacao;
    },

    dividir: function(numero1, numero2) {
      return numero1 / numero2;
    }

  };
})(this);
