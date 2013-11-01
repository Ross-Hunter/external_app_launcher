gotoExternalApp = function () {
  var options = Environment.appOptions;
  console.log ("Launching " + options.appName);
  ExternalApp.launch(options);
};
