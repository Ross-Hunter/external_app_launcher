var ExternalAppLauncher = function (){};

ExternalAppLauncher.prototype.launchApp = function (options, success, error) {
  return cordova.exec(
    success,
    error,
    "ExternalAppLauncher",
    "launchApp",
    [options.androidAppID]
  );
};

ExternalAppLauncher.prototype.launchMarket = function (options, success, error) {
  return cordova.exec(
    success,
    error,
    "ExternalAppLauncher",
    "launchMarket",
    [options.androidAppID]
  );
};

if (!window.plugins){
  window.plugins = {};
}
if (!window.plugins.ExternalAppLauncher){
  window.plugins.ExternalAppLauncher = new ExternalAppLauncher();
}

