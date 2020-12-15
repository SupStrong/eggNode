'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    author:STRING,
    group:STRING,
    type:INTEGER,
    status:INTEGER,
    relation:STRING,
    textarea:TEXT,
    browse:INTEGER,
    praise:INTEGER,
    collection:INTEGER,
    create_time:DATE
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return Article;
};