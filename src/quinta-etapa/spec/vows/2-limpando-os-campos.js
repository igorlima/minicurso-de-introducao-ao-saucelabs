var vows    = require('vows'),
    expect  = require('chai').expect,
    fs      = require('fs'),
    config   = require('../lib/config-webdriver.js'),
    browser  = config.browser,
    ELEMENTS = config.ELEMENTS;

vows.describe('Limpando os campos de números')
.addBatch({
  'Digitando o número 20 no primeiro campo': {
    topic: function() {
      var callback = this.callback;
      ELEMENTS.INPUT.PRIMEIRO_NUMERO.type( "20", function(err) {
        callback( err );
      });
    },
    'Número 20 digitado': function() { /**...*/ }
  }
})
.addBatch({
  'Digitando o número 4 no campo do segundo número': {
    topic: function() {
      var callback = this.callback;
      ELEMENTS.INPUT.PRIMEIRO_NUMERO.type( "4", function(err) {
        callback( err );
      });
    },
    'Número 4 digitado': function() { /**...*/ }
  }
})
.addBatch({
  'Clicando no botão de somar': {
    topic: function() {
      var callback = this.callback;
      ELEMENTS.BUTTONS.SOMAR.click( function(err){
        callback( err );
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
          callback( err );
        })
      });
    },
    'O campo do primeiro número': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.PRIMEIRO_NUMERO.getValue( function(err, primeiro_numero) {
          callback( err, primeiro_numero );
        });
      },
      'DEVE estar vazio': function(primeiro_numero) {
        expect( primeiro_numero ).to.be.empty;
      }
    },
    'O campo do segundo número': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.PRIMEIRO_NUMERO.getValue( function(err, segundo_numero) {
          callback( err, segundo_numero );
        });
      },
      'DEVE estar vazio': function(segundo_numero) {
        expect( segundo_numero ).to.be.empty;
      }
    },
    'O valor do resultado da calculadora': {
      topic: function() {
        var callback = this.callback;
        ELEMENTS.INPUT.RESULTADO.getValue( function(err, resultado) {
          callback( err, resultado );
        });
      },
      'DEVE estar vazio': function(resultado) {
        expect( resultado ).to.be.empty;
      }
    }
  }
})

// .addBatch({
//   'Digitando o número 20 no campo do primeiro número': {
//     topic: function() {
//       var callback = this.callback;
//       ELEMENTS.INPUT.PRIMEIRO_NUMERO.type( "20", function(err) {
//         callback( err );
//       });
//     },
//     "Tirando um screenshot": {
//       topic: function() {
//         var callback = this.callback;
//         browser.takeScreenshot( function(err, screenshot) {
//           fs.writeFile('screenshot.png', screenshot, 'base64', function(err){
//             callback(err);
//           });
//         });
//       },
//       "Screenshot tirado apos digitar o numero 20": function() { /** ... */ }
//     }
//   }
// })

.export(module);
