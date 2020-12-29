'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const NewsDynamic = app.model.define('news_dynamic', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: {type:INTEGER,defaultValue:0},
    textarea: {type:STRING(1000)},
    create_time:{type:DATE}
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return NewsDynamic;
};