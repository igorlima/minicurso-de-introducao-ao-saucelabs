var exports   = module.exports = {},
    webdriver = require('wd'),
    desired   = exports.desired = {
      "browserName": "chrome",
      "version"    : "",
      "platform"   : "Linux",
      "tags"       : ["segunda-etapa", "minicurso"],
      "name"       : "Teste de interface da 2a etapa",
      "public"     : "public",
      "build"      : "primeiro build",
      "tunnel-identifier": "minicurso",
      "record-video": true
    },
    browser   = exports.browser = webdriver.remote({
      hostname: "ondemand.saucelabs.com",
      port: 80,
      user: process.env.SAUCE_USERNAME,
      pwd:  process.env.SAUCE_ACCESS_KEY
    });

/**
Vows Errored » callback not fired
http://birkett.no/blog/2013/05/01/vows-errored-callback-not-fired/
*/
process.on( 'uncaughtException', function(err) {
  console.error('Caught exception: ' + err.stack );
});
