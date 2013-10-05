var exports   = module.exports = {},
    webdriver = require('wd'),

    desired   = exports.desired = process.env.browserNameSL && {
      "browserName": process.env.browserNameSL,
      "version"    : process.env.versionSL,
      "platform"   : process.env.platformSL,
      "tags"       : ["quinta-etapa", "minicurso"],
      "name"       : "Teste de interface da 5a etapa",
      "public"     : "public",
      "build"      : process.env.TRAVIS_BUILD_NUMBER || "dev-build",
      "tunnel-identifier": "minicurso",
      "record-video": true
    },

    auth      = exports.auth = {
      username:  desired && process.env.SAUCE_USERNAME,
      accessKey: desired && process.env.SAUCE_ACCESS_KEY
    },

    browser   = exports.browser = webdriver.remote({
      hostname: desired ? "ondemand.saucelabs.com" : "localhost",
      port: desired ? 80 : 8910
    }),

    elements = exports.ELEMENTS = {
      INPUT: {},
      BUTTONS: {}
    };

browser.on("status", function(info) {
  //console.log("\x1b[36m%s\x1b[0m", info);
});

browser.on("command", function(meth, path, data) {
  //console.log(" > \x1b[33m%s\x1b[0m: %s", meth, path, data || "");
});

/**
Vows Errored » callback not fired
http://birkett.no/blog/2013/05/01/vows-errored-callback-not-fired/
*/
process.on( 'uncaughtException', function(err) {
  console.error('Caught exception: ' + err.stack );
});
