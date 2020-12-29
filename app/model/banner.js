'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const Banner = app.model.define('banners', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    imgs: {type:STRING(1000)},
    status:{type:INTEGER,defaultValue:1},
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return Banner;
};