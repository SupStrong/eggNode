'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING  } = Sequelize;
    await queryInterface.createTable('banners', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      imgs: {type:STRING(1000)},
      status:{type:INTEGER,defaultValue:1},
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('banners');
  },
};