var vows    = require('vows'),
    expect  = require('chai').expect,
    browser = require('./configurando-webdriver.js').browser;

vows.describe('Apenas um exemplo')
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
    "O título da página deve conter 'Sauce Labs'": function(title) {
      expect(title).to.contain('Minha');
    },
    "O título da página deve conter 'page title'": function(title) {
      expect(title).to.contain('calculadora');
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
