import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1689147866818_5291',
    egg: {
      port: 7001,
      globalPrefix: '/api',
    },
    validate: {
      validationOptions: {
        allowUnknown: true, // 全局生效
      },
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
