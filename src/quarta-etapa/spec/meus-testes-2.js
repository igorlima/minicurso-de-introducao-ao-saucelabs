var vows    = require('vows'),
    expect  = require('chai').expect,
    fs      = require('fs'),
    browser = require('./configurando-webdriver.js').browser;

vows.describe('Limpando os campos de números')
.addBatch({
  'Acessando a página da calculadora': {
    topic: function() {
      var callback = this.callback;
      browser.init( {}, function(err, sessionID, capabilities) {
        err && callback( err );
        browser.get( 'http://localhost:9001', function(err) {
          callback( err );
        });
      });
    },
    'Página de teste aberta': function() { /**...*/ }
  }
})
.addBatch({
  'Digitando o número 20 no primeiro campo': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, element) {
        err && callback( err );
        element.type( "20", function(err) {
          callback( err, element );
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
        element.type( "4", function(err) {
          callback( err, element );
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
        botao_de_somar.click( function(err){
          callback(err, botao_de_somar);
        })
      });
    },
    'clicado': function() { /**...*/ }
  }
})
.addBatch({
  'Clicando no botão de limpar': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'button#btnLimpar', function(err, botao_de_limpar) {
        err && callback(err);
        botao_de_limpar.click( function(err){
          callback(err, botao_de_limpar);
        })
      });
    },
    'O campo do primeiro número': {
      topic: function(botao_de_limpar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, campo_do_primeiro_numero) {
          err && callback( err );
          campo_do_primeiro_numero.getValue( function(err, primeiro_numero) {
            callback( err, primeiro_numero );
          });
        });
      },
      'DEVE estar vazio': function(primeiro_numero) {
        expect( primeiro_numero ).to.be.empty;
      }
    },
    'O campo do segundo número': {
      topic: function(botao_de_limpar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#segundo-numero .input-control.text input', function(err, campo_do_segundo_numero) {
          err && callback( err );
          campo_do_segundo_numero.getValue( function(err, segundo_numero) {
            callback( err, segundo_numero );
          });
        });
      },
      'DEVE estar vazio': function(segundo_numero) {
        expect( segundo_numero ).to.be.empty;
      }
    },
    'O valor do resultado da calculadora': {
      topic: function(botao_de_limpar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, campo_do_resultado) {
          err && callback( err );
          campo_do_resultado.getValue( function(err, resultado) {
            callback( err, resultado );
          });
        });
      },
      'DEVE estar vazio': function(resultado) {
        expect( resultado ).to.be.empty;
      }
    }
  }
})



.addBatch({
  'Digitando o número 20 no campo do primeiro número': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, element) {
        err && callback( err );
        element.type( "20", function(err) {
          callback( err, element );
        });
      });
    },
    "Tirando um screenshot": {
      topic: function(element) {
        var callback = this.callback;
        browser.takeScreenshot( function(err, screenshot) {
          fs.writeFile('screenshot.png', screenshot, 'base64', function(err){
            callback(err, element);
          });
        });
      },
      "Screenshot tirado apos digitar o numero 20": function() { /** ... */ }
    }
  }
})

.addBatch({
  'Fechando o navegador': {
    topic: function() {
      var callback = this.callback;
      browser.quit( function(err){
        callback( err );
      });
    },
    'Fim': function() { /**...*/ }
  }
}).export(module);
