var vows    = require('vows'),
    expect  = require('chai').expect,
    browser = require('./configurando-webdriver.js').browser;

vows.describe('Limpando os campos de números')
.addBatch({
  'Criando uma nova sessão no WebDriver': {
    topic: function() {
      var callback = this.callback;
      browser.init( {}, function(err, sessionID, capabilities) {
        callback( err );
      });
    },
    'Sessão criada': function() { /**...*/ }
  }
})
.addBatch({
  'Acessando a página da calculadora': {
    topic: function() {
      var callback = this.callback;
      browser.get( 'http://localhost:9001', function(err) {
        callback( err );
      });
    },
    'Página de teste aberta': function() { /**...*/ }
  }
})
.addBatch({
  'Selecionando o campo do primeiro número': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, element) {
        callback( err, element );
      });
    },
    "Digitando o número '20'": {
      topic: function(element) {
        var callback = this.callback;
        element.type( "20", function(err) {
          callback( err, element );
        });
      },
      'Número 20 digitado': function() { /**...*/ }
    }
  }
})
.addBatch({
  'Selecionando o campo do segundo número': {
    topic: function() {
      var callback = this.callback;
      browser.elementByCssSelector( 'div#segundo-numero .input-control.text input', function(err, element) {
        callback( err, element );
      });
    },
    "Digitando o número '4'": {
      topic: function(element) {
        var callback = this.callback;
        element.type( "4", function(err) {
          callback( err, element );
        });
      },
      'Número 4 digitado': function() { /**...*/ }
    }
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
    'Selecionando o campo do primeiro número': {
      topic: function(botao_de_limpar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#primeiro-numero .input-control.text input', function(err, campo_do_primeiro_numero) {
          callback( err, campo_do_primeiro_numero );
        });
      },
      "Pegando o valor contido no primerio campo": {
        topic: function(campo_do_primeiro_numero, botao_de_limpar) {
          var callback = this.callback;
          campo_do_primeiro_numero.getValue( function(err, primeiro_numero) {
            callback( err, primeiro_numero );
          });
        },
        'O valor do primerio campo DEVE estar vazio': function(primeiro_numero) {
          expect( primeiro_numero ).to.be.empty;
        }
      }
    },
    'Selecionando o campo do segundo número': {
      topic: function(botao_de_limpar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#segundo-numero .input-control.text input', function(err, campo_do_segundo_numero) {
          callback( err, campo_do_segundo_numero );
        });
      },
      "Pegando o valor contido no segundo campo": {
        topic: function(campo_do_segundo_numero, botao_de_limpar) {
          var callback = this.callback;
          campo_do_segundo_numero.getValue( function(err, segundo_numero) {
            callback( err, segundo_numero );
          });
        },
        'O valor do segundo campo DEVE estar vazio': function(segundo_numero) {
          expect( segundo_numero ).to.be.empty;
        }
      }
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
