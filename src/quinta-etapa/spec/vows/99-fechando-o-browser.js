var vows    = require('vows'),
    config   = require('../lib/config-webdriver.js'),
    browser  = config.browser,
    ELEMENTS = config.ELEMENTS;

vows.describe('Finalizando')
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
