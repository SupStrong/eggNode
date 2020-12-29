'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const UserLists = app.model.define('user_lists', {
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
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return UserLists;
};