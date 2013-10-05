var launcher        = require('sauce-connect-launcher'),
    config          = require('./config-webdriver.js'),
    integrationTest = require('./sauce-javascript-tests-integration.js'),

    localhost       = "http://localhost:8080",
    jsTestReporter  = "{failedCount: jasmine.currentEnv_.currentRunner_.results().failedCount}",
    startConnect    = !!process.env.connectSL,
    launcherOptions = {
      username:  config.auth.username,
      accessKey: config.auth.accessKey,
      verbose:   true,
      logfile:   'sauce-example.log', //optionally change sauce connect logfile location
      tunnelIdentifier: config.desired["tunnel-identifier"], // optionally identity the tunnel for concurrent tunnels
      logger: console.log,
      no_progress: false // optionally hide progress bar
    };


startConnect || integrationTest(localhost,jsTestReporter);

startConnect && launcher(launcherOptions, function (err, sauceConnectProcess) {
  console.log("Started Sauce Connect Process");
  integrationTest(localhost, jsTestReporter, function() {
    sauceConnectProcess.close(function () {
      console.log("Closed Sauce Connect process");
    });
   });
});
