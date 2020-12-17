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
    ]
  }
  //解决跨域
  config.security = {
	  //就是这里
    csrf: { 
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*'],
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  config.bodyParser = {
      jsonLimit: '10mb'
  }
  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    username: "roots",
    password: "123456",
    database: 'egg-sequelize-doc-default',
    define: { // model的全局配置
      timestamps: true, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false // 防止驼峰式字段被默认转为下划线
    },
    timezone: '+08:00', // 保存为本地时区
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      }
    }
  },
  config.mysql={
    //database configuration 
    client:{
        //host 
        host:'localhost',
        //port 
        port:3307,
        //username 
        user:'roots',
        //password 
        password:'123456',
        //database 
        database:'egg-sequelize-doc-default'
    },
    //load into app,default is open //加载到应用程序，默认为打开
    app:true,
    //load into agent,default is close //加载到代理中，默认值为“关闭”
    agent:false,
};
  config.security = {
    csrf: {
      enable: false,
    }, // 必须加 否则： 403 Forbidden message: "missing csrf token"
    // domainWhiteList: [ '*' ]
　　},
  config.cors = {
      origin:'*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
  config.multipart = { 
    fileSize: '50mb',
    mode: 'file',
    fileExtensions: ['.xls', '.mp4'], // 扩展几种上传的文件格式
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
exports.cluster = {
  listen: {
    port: 7001,
    hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
    // path: '/var/run/egg.sock',
  }
}

