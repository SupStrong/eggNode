'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING,DATE  } = Sequelize;
    await queryInterface.createTable('doors', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {type:STRING},
      details:{type:STRING(1000)},
      images:{type:STRING(1000)},
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('doors');
  },
};