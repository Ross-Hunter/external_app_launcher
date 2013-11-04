var ExternalAppLauncher = function (){};

ExternalAppLauncher.prototype.launchApp = function (options, success, error) {
  return cordova.exec(
    success,
    error,
    "ExternalAppLauncher",
    "launch",
    [options.iosUrlScheme]
  );
};

ExternalAppLauncher.prototype.launchMarket = function (options, success, error) {
  return cordova.exec(
    success,
    error,
    "ExternalAppLauncher",
    "launchMarket",
    [options.storeUrl]
  );
};

if (!window.plugins) {
  window.plugins = {};
}
if (!window.plugins.ExternalAppLauncher){
  window.plugins.ExternalAppLauncher = new ExternalAppLauncher();
}
