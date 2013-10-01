var vows    = require('vows'),
    expect  = require('chai').expect,
    config  = require('./config-wd-using-saucelabs.js'),
    browser = config.browser,
    desired = config.desired;

vows.describe('Apenas um exemplo')
.addBatch({
  'Criando uma nova sessão no WebDriver': {
    topic: function() {
      var callback = this.callback;
      browser.init( desired, function(err, sessionID, capabilities) {
        callback( err );
      });
    },
    'Sessão criada': function() { /**...*/ }
  }
})
.addBatch({
  'Acessando a página de teste do SauceLabs': {
    topic: function() {
      var callback = this.callback;
      browser.get( 'http://saucelabs.com/test/guinea-pig', function(err) {
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
      expect(title).to.contain('Sauce Labs');
    },
    "O título da página deve conter 'page title'": function(title) {
      expect(title).to.contain('page title');
    },
    "O título da página deve conter 'I am a'": function(title) {
      expect(title).to.contain('I am a');
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
