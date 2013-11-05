define([
  // look ma, no dependencies!
], function () {

  var module = {};

  module.confirm = function (message, title, callback) {
    if (navigator && navigator.notification && navigator.notification.confirm) {
      navigator.notification.confirm(message, function (index) {
        callback(index === 1);
      }, title);
    } else {
      if (callback) {
        callback(confirm(message));
      }
    }
  };

  module.alert = function (message, title, callback) {
    if (navigator && navigator.notification && navigator.notification.confirm) {
      navigator.notification.alert(message, callback, title);
    } else {
      alert(message);
      if (callback) {
        callback();
      }
    }
  };

  return module;

});
