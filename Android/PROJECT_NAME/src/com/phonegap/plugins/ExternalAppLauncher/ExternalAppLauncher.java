/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2006-2011, Ltd.
 */

package com.phonegap.plugins.externalApp;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Log;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class ExternalAppLauncher extends CordovaPlugin {

  public static final String LAUNCH = "launch";
  public static final String LAUNCH_MARKET = "launchMarket";
  private final String pluginName = "ExternalAppLauncher";

  @Override
  public boolean execute(String action, JSONArray data, CallbackContext callbackContext) {

    Context context = cordova.getActivity().getApplicationContext();
    PackageManager pm = cordova.getActivity().getPackageManager();

    String packageName;
    Boolean result = true;

    try {
      packageName = data.getString(0);
    } catch (JSONException e) {
      return false;
    }

    if (LAUNCH.equals(action)){
      result = launchApp(context, pm, packageName);
    } else if (LAUNCH_MARKET.equals(action)) {
      result = launchMarket(context, packageName);
    }

    if (result == true) {
      callbackContext.success(0);
      return true;
    } else {
      callbackContext.error(0);
      return false;
    }
  }

  /**
   * handle the required pre-installed app
   */
  private boolean launchApp(Context context, PackageManager pm, String packageName) {
    Log.d(pluginName, "Launching App " + packageName);
    Intent intent = pm.getLaunchIntentForPackage(packageName);
    Boolean result = false;
    try {
      context.startActivity(intent);
      result = true;
    } catch (Exception ex) {
      result = false;
    }
    return result;
  }

  /**
   * launch market to certain app
   */
  private boolean launchMarket(Context context, String packageName) {
    Log.d(pluginName, "Launch Market");
    Intent intent = new Intent(Intent.ACTION_VIEW);
    intent.setData(Uri.parse("market://details?id=" + packageName));
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    Boolean result = false;
    try {
      context.startActivity(intent);
      result = true;
    } catch (Exception ex) {
      Log.d(pluginName, ex.getMessage());
      result = false;
    }
    return result;
  }
}
