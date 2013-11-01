#import <Cordova/CDVPlugin.h>

@interface CDVExternalAppLauncher : CDVPlugin <UIAlertViewDelegate>

- (void)launch:(CDVInvokedUrlCommand *)command;
- (void)launchMarket:(CDVInvokedUrlCommand *)command;

@property (strong, nonatomic) NSURL *appStoreUrl;

@end
