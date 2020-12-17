'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING , TEXT  } = Sequelize;
    await queryInterface.createTable('new_lists', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      a_id: INTEGER,
      title:STRING,
      author:STRING,
      create_time:DATE,
      details:STRING,
      fabulous:{type:INTEGER,defaultValue:0},
      read:{type:INTEGER,defaultValue:0},
      source:STRING,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('new_lists');
  },
};