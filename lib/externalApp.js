define([
  'vendor/underscore',
  'lib/device'
], function(_, Device){

  var ExternalApp = {
    launch: function (options) {
      var success = function () {
        console.log("External app launched");
      };
      var error = _.bind(this._askToDownload, this, options);

      if (window.plugins && window.plugins.ExternalAppLauncher) {
        console.log("External launcher is installed");
        window.plugins.ExternalAppLauncher.launch(options, success, error);
      } else {
        console.log("External launcher is not installed");
      }
    },

    _askToDownload: function (options) {
      console.log("External app not installed");

      var success = function () {
        console.log("Market app launched");
      };
      var error = function () {
        console.log("Something went wrong connecting to app store");
      };

      var message = options.appName + " is not installed on this device, would you like to download it now?";

      Device.confirm(message, 'Launch App Store', function(confirmed) {
        if (confirmed){
          window.plugins.ExternalAppLauncher.launchMarket(options, success, error);
        }
      });
    }
  };

  return ExternalApp;
});
