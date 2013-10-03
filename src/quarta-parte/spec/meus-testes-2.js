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
  '...': {
    
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
