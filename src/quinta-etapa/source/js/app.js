(function (global, Calculadora) {
  var BOTAO = {
        SOMAR:       $("#btnSomar"),
        SUBTRAIR:    $("#btnSubtrair"),
        MULTIPLICAR: $("#btnMultiplicar"),
        DIVIDIR:     $("#btnDividir"),
        LIMPAR:      $("#btnLimpar")
      },
      INPUT = {
        PRIMEIRO_NUMERO: $("div#primeiro-numero .input-control.text input"),
        SEGUNDO_NUMERO:  $("div#segundo-numero .input-control.text input"),
        RESULTADO:       $("div#resultado-da-calculadora .input-control.text input")
      },
      getNumeros = function() {
        return {
          UM: INPUT.PRIMEIRO_NUMERO.val(),
          DOIS: INPUT.SEGUNDO_NUMERO.val()
        }
      };

  BOTAO.SOMAR.click( function() {
    var NUMERO = getNumeros();
    INPUT.RESULTADO.val( Calculadora.somar(NUMERO.UM, NUMERO.DOIS) );
  });

  BOTAO.SUBTRAIR.click( function() {
    var NUMERO = getNumeros();
    INPUT.RESULTADO.val( Calculadora.subtrair(NUMERO.UM, NUMERO.DOIS) );
  });

  BOTAO.MULTIPLICAR.click( function() {
    var NUMERO = getNumeros();
    INPUT.RESULTADO.val( Calculadora.multiplicar(NUMERO.UM, NUMERO.DOIS) );
  });

  BOTAO.DIVIDIR.click( function() {
    var NUMERO = getNumeros();
    INPUT.RESULTADO.val( Calculadora.dividir(NUMERO.UM, NUMERO.DOIS) );
  });

  BOTAO.LIMPAR.click( function(){
    INPUT.PRIMEIRO_NUMERO.val( '' );
    INPUT.SEGUNDO_NUMERO.val( '' );
    INPUT.RESULTADO.val( '' );
  });

})(this, Calculadora);
