'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const Feedback_list = app.model.define('feedback_list', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: {type:INTEGER},
    imgs: {type:STRING(1000)},
    textarea: {type:STRING(1000)},
    code: {type:STRING},
    status:{type:INTEGER},
    remarks:{type:STRING(1000)},
    submit_time:{type:DATE},
    complete_time:{type:DATE}
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return Feedback_list;
};