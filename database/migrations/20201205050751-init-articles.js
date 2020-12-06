'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TIME } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING,
      author:STRING,
      group:STRING,
      date1:DATE,
      date2:TIME,
      type:INTEGER,
      status:INTEGER,
      tags:STRING,
      textarea:STRING,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};