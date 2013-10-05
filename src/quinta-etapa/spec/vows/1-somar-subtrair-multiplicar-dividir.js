var vows    = require('vows'),
    expect  = require('chai').expect,
    config   = require('../lib/config-webdriver.js'),
    browser  = config.browser,
    ELEMENTS = config.ELEMENTS;

vows.describe('Testanto os botões de somar, subtrair, multiplar e dividir')
.addBatch({
  'Digitando o número 20 no campo do primeiro número': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, element) {
        err && callback( err );
        ELEMENTS.INPUT.PRIMEIRO_NUMERO = element;
        element.type( "20", function(err) {
          callback( err );
        });
      });
    },
    'Número 20 digitado': function() { /**...*/ }
  }
})
.addBatch({
  'Digitando o número 4 no campo do segundo número': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#segundo-numero .input-control.text input', function(err, element) {
        err && callback( err );
        ELEMENTS.INPUT.SEGUNDO_NUMERO = element;
        element.type( "4", function(err) {
          callback( err );
        });
      });
    },
    'Número 4 digitado': function() { /**...*/ }
  }
})
.addBatch({
  'Clicando no botão de somar': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'button#btnSomar', function(err, botao_de_somar) {
        err && callback(err);
        ELEMENTS.BUTTONS.SOMAR = botao_de_somar;
        botao_de_somar.click( function(err){
          callback( err );
        })
      });
    },
    'O resultado da calculadora': {
      topic: function() {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, element) {
          err && callback( err );
          ELEMENTS.INPUT.RESULTADO = element;
          ELEMENTS.INPUT.RESULTADO.getValue( function(err, texto_do_resultado) {
            callback( err, texto_do_resultado );
          });
        });
      },
      'DEVE ser 24': function(texto_do_resultado) {
        expect( +texto_do_resultado ).to.equal( 24 );
      }
    }
  }
})
.addBatch({
  'Clicando no botão de subtrair': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'button#btnSubtrair', function(err, botao_de_subtrair) {
        err && callback(err);
        botao_de_subtrair.click( function(err){
          callback( err );
        })
      });
    },
    'O resultado da calculadora': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.RESULTADO.getValue( function(err, texto_do_resultado) {
          callback( err, texto_do_resultado );
        });
      },
      'DEVE ser 16': function(texto_do_resultado) {
        expect( +texto_do_resultado ).to.equal( 16 );
      }
    }
  }
})
.addBatch({
  'Clicando no botão de multiplar': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'button#btnMultiplicar', function(err, botao_de_multiplicar) {
        err && callback(err);
        botao_de_multiplicar.click( function(err){
          callback( err );
        })
      });
    },
    'O resultado da calculadora': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.RESULTADO.getValue( function(err, texto_do_resultado) {
          callback( err, texto_do_resultado );
        });
      },
      'DEVE ser 80': function(texto_do_resultado) {
        expect( +texto_do_resultado ).to.equal( 80 );
      }
    }
  }
})
.addBatch({
  'Clicando no botão de dividir': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'button#btnDividir', function(err, botao_de_dividir) {
        err && callback(err);
        botao_de_dividir.click( function(err){
          callback( err );
        })
      });
    },
    'O resultado da calculadora': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.RESULTADO.getValue( function(err, texto_do_resultado) {
          callback( err, texto_do_resultado );
        });
      },
      'DEVE ser 5': function(texto_do_resultado) {
        expect( +texto_do_resultado ).to.equal( 5 );
      }
    }
  }
}).export(module);
