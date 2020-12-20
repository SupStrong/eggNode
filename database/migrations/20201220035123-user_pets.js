'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING,DATE  } = Sequelize;
    await queryInterface.createTable('user_pets', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      p_id: {type:INTEGER},
      sex:{type:STRING},
      name:{type:STRING},
      images:{type:STRING},
      details:{type:STRING(1000)},
      petstype:{type:STRING(1000)},
      birth_date:{type:DATE}
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('user_pets');
  },
};