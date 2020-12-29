'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const AnimalCircles = app.model.define('animal_circles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:STRING},
    title:{type:STRING}
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return AnimalCircles;
};