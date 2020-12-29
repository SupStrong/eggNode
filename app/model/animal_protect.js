'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const Animal_protect = app.model.define('animal_protect', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: {type:STRING},
    address:{type:STRING},
    city:{type:STRING},
    mobile:{type:STRING},
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return Animal_protect;
};