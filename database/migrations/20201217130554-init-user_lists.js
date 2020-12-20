'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING , TEXT  } = Sequelize;
    await queryInterface.createTable('about_lists', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: {type:STRING(1000)},
      textarea: {type:STRING(1000)},
      create_time:{type:DATE}
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('about_lists');
  },
};