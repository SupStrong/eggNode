'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
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
  // 表关联的字段
  User.associate = function() {
    // 一对多
    app.model.User.hasMany(app.model.List, { foreignKey: 'user_id', targetKey: 'id'});
    /**
     * User.belongsTo(关联的模型, { foreignKey: '使用什么字段关联', targetKey: '与关联的模型那个字段关联', as: '别名' });
    */
    // 一对一
  }

  return User;
};