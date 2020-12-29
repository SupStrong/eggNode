'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const UserLists = app.model.define('user_lists', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    a_id: INTEGER,
    title:STRING,
    author:STRING,
    create_time:DATE,
    details:STRING,
    fabulous:{type:INTEGER,defaultValue:0},
    read:{type:INTEGER,defaultValue:0},
    source:STRING,
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return UserLists;
};