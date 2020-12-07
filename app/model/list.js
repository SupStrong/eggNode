'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const List = app.model.define('lists', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id:STRING,
    title:STRING
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });
  return List;
};