var vows    = require('vows'),
    expect  = require('chai').expect,
    browser = require('./configurando-webdriver.js').browser;

vows.describe('Testanto os botões de somar, subtrair, multiplar e dividir')
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
  'Verificando o título da página': {
    topic: function() {
      var callback = this.callback;
      browser.title( function(err, title) {
        callback( err, title );
      });
    },
    "O título deve conter 'Sauce Labs'": function(title) {
      expect(title).to.contain('Minha');
    },
    "O título deve conter 'page title'": function(title) {
      expect(title).to.contain('calculadora');
    }
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
    'Selecionando o campo do resultado da calculadora': {
      topic: function(botao_de_somar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, campo_do_resultado) {
          callback( err, campo_do_resultado );
        });
      },
      "Pegando o resultado": {
        topic: function(campo_do_resultado, botao_de_somar) {
          var callback = this.callback;
          campo_do_resultado.getValue( function(err, texto_do_resultado) {
            callback( err, texto_do_resultado );
          });
        },
        'O resultado da soma deve ser 24': function(texto_do_resultado) {
          expect( +texto_do_resultado ).to.equal( 24 );
        }
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
          callback(err, botao_de_subtrair);
        })
      });
    },
    'Selecionando o campo do resultado da calculadora': {
      topic: function(botao_de_subtrair) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, campo_do_resultado) {
          callback( err, campo_do_resultado );
        });
      },
      "Pegando o resultado": {
        topic: function(campo_do_resultado, botao_de_subtrair) {
          var callback = this.callback;
          campo_do_resultado.getValue( function(err, texto_do_resultado) {
            callback( err, texto_do_resultado );
          });
        },
        'O resultado da subtração deve ser 16': function(texto_do_resultado) {
          expect( +texto_do_resultado ).to.equal( 16 );
        }
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
          callback(err, botao_de_multiplicar);
        })
      });
    },
    'Selecionando o campo do resultado da calculadora': {
      topic: function(botao_de_multiplicar) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, campo_do_resultado) {
          callback( err, campo_do_resultado );
        });
      },
      "Pegando o resultado": {
        topic: function(campo_do_resultado, botao_de_multiplicar) {
          var callback = this.callback;
          campo_do_resultado.getValue( function(err, texto_do_resultado) {
            callback( err, texto_do_resultado );
          });
        },
        'O resultado da mulitiplicação deve ser 80': function(texto_do_resultado) {
          expect( +texto_do_resultado ).to.equal( 80 );
        }
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
          callback(err, botao_de_dividir);
        })
      });
    },
    'Selecionando o campo do resultado da calculadora': {
      topic: function(botao_de_dividir) {
        var callback = this.callback;
        browser.elementByCssSelector( 'div#resultado-da-calculadora .input-control.text input', function(err, campo_do_resultado) {
          callback( err, campo_do_resultado );
        });
      },
      "Pegando o resultado": {
        topic: function(campo_do_resultado, botao_de_dividir) {
          var callback = this.callback;
          campo_do_resultado.getValue( function(err, texto_do_resultado) {
            callback( err, texto_do_resultado );
          });
        },
        'O resultado da divisão deve ser 5': function(texto_do_resultado) {
          expect( +texto_do_resultado ).to.equal( 5 );
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
