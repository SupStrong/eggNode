'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: INTEGER,
      author:INTEGER,
      group:INTEGER,
      date1:INTEGER,
      date2:INTEGER,
      type:INTEGER,
      status:INTEGER,
      tags:INTEGER,
      textarea:INTEGER
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('articles');
  },
};
