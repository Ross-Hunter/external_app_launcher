#import "CDVExternalAppLauncher.h"
#import "NSArray+Comparisons.h"

@implementation CDVExternalAppLauncher

- (void)launchApp:(CDVInvokedUrlCommand *)command {
    NSLog(@"Looking for the app on iOS");
    NSURL *appUrl = [NSURL URLWithString:[command.arguments objectAtIndex:0]];

    CDVPluginResult* pluginResult = nil;

    if ([[UIApplication sharedApplication] canOpenURL:appUrl]) {
      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
      [[UIApplication sharedApplication] openURL:appUrl];
    } else {
      pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)launchMarket:(CDVInvokedUrlCommand *)command {
  NSLog(@"Launching the app store in iOS");
  NSURL *appStoreUrl = [NSURL URLWithString:[command.arguments objectAtIndex:0]];
  CDVPluginResult* pluginResult = nil;

  [[UIApplication sharedApplication] openURL:appStoreUrl];
  pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
  [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
