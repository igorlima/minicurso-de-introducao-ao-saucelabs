var vows     = require('vows'),
    config   = require('../lib/config-webdriver.js'),
    api      = require('../lib/sauce-api-rest-update-job-status.js'),
    browser  = config.browser,
    ELEMENTS = config.ELEMENTS,
    report   = function() {
      var results = {
        honored: 0,
        broken:  0,
        errored: 0,
        total:   0
      };

      vows.suites.forEach(function(suite){
        results.honored  += suite.results.honored;
        results.broken   += suite.results.broken;
        results.errored  += suite.results.errored;
        results.total    += suite.results.total;
      });
      return results;
    };

vows.describe('Finalizando')
.addBatch({
  'Fechando o navegador': {
    topic: function() {
      var callback = this.callback,
          results  = report(),
          data     = {
            passed: !results.broken && !results.errored
          };

      browser.quit( function(err) {
        if (!config.desired) callback( err );
        else api(data).then( function() {
          callback( err );
        });
      });
    },
    'Fim': function() { /**...*/ }
  }
}).export(module);
