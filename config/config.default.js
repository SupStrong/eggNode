/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604634155214_5070';

  // add your middleware config here
  config.middleware = [ ];
  config.forbidIp = {
    forbidips: [
      '192.168.1.12',
      '127.0.0.1',
    ]
  }
  config.bodyParser = {
      // 默认1MB
      enable: false,
      jsonLimit: '10mb'
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
