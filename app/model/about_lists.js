'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const AboutLists = app.model.define('about_lists', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: {type:STRING(1000)},
    textarea: {type:STRING(1000)},
    create_time:{type:DATE}
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return AboutLists;
};