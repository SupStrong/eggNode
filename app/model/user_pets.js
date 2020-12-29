'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const User_pets = app.model.define('user_pets', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      p_id: {type:INTEGER},
      sex:{type:STRING},
      name:{type:STRING},
      images:{type:STRING},
      details:{type:STRING(1000)},
      petstype:{type:STRING(1000)},
      birth_date:{type:DATE}  
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return User_pets;
};