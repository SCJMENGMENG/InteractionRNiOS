//
//  MyModule.m
//  InteractionRNiOS
//
//  Created by scj on 2018/6/5.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "MyModule.h"

@implementation MyModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testCallbackEvent:(NSString *)event callback:(RCTResponseSenderBlock)callback){
  NSLog(@"%@",event);
  NSString *callbackData = @"Callback数据";
  callback(@[[NSNull null],callbackData]);
}

RCT_REMAP_METHOD(testPromisesEvent,
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
  NSString *PromisesData = @"Promises数据";
  if (PromisesData) {
    resolve(PromisesData);
  }else{
    NSError *error = [NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events",@"There were no events",error);
  }
}

@end
