var vows     = require('vows'),
    config   = require('../lib/config-webdriver.js'),
    browser  = config.browser,
    desired  = config.desired,
    ELEMENTS = config.ELEMENTS;

ELEMENTS.l = 1;
vows.describe('Iniciando...')
.addBatch({
  'Acessando a página da calculadora': {
    topic: function() {
      var callback = this.callback;
      browser.init( desired, function(err, sessionID, capabilities) {
        err && callback( err );
        browser.get( 'http://localhost:9001', function(err) {
          callback( err );
        });
      });
    },
    'Página de teste aberta': function() { /**...*/ }
  }
}).export(module);
