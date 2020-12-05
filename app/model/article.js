'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: INTEGER,
    author:INTEGER,
    group:INTEGER,
    date1:INTEGER,
    date2:INTEGER,
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