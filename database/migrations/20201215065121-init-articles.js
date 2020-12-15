'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING , TEXT  } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING,
      author:STRING,
      group:STRING,
      type:INTEGER,
      status:INTEGER,
      relation:STRING,
      textarea:TEXT,
      browse:{type:INTEGER,defaultValue:0},
      praise:{type:INTEGER,defaultValue:0},
      collection:{type:INTEGER,defaultValue:0},
      create_time:DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};