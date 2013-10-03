var exports   = module.exports = {},
    webdriver = require('wd'),
    browser   = exports.browser = webdriver.remote({
      hostname: "localhost",
      port: 8910
    });

/**
Vows Errored » callback not fired
http://birkett.no/blog/2013/05/01/vows-errored-callback-not-fired/
*/
process.on( 'uncaughtException', function(err) {
  console.error('Caught exception: ' + err.stack );
});
