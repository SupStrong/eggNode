'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    author:STRING,
    group:STRING,
    date1:DATE,
    date2:DATE,
    type:INTEGER,
    status:INTEGER,
    tags:INTEGER,
    textarea:INTEGER,
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return Article;
};