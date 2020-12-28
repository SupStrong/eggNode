'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING , TEXT  } = Sequelize;
    await queryInterface.createTable('user_lists', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: {type:INTEGER},
      openid: {type:STRING(1000)},
      mobile:{type:STRING},
      sex:{type:STRING},
      image:{type:STRING},
      details:{type:STRING},
      fabulous:{type:INTEGER},
      follow:{type:INTEGER}, 
      follow_animal:{type:STRING(1000)},   
      like_animal:{type:STRING(1000)},   
      collection_animal:{type:STRING(1000)}, 
      create_time:{type:DATE},    
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('user_lists');
  },
};