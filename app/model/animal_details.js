'use strict';

module.exports = app => {
  const { DATE, INTEGER, STRING , TEXT } = app.Sequelize;

  const AnimalDetails = app.model.define('animal_details', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    c_id: INTEGER,
    name:STRING,
    alias:STRING,
    imgs:{type:STRING(1000)},
    protectlevel:{type:INTEGER,defaultValue:0},
    habitat:STRING,
    area:STRING,
    circles:STRING,
    door:STRING,
    amen:STRING,
    outline:STRING,
    subclass:STRING,
    eye:STRING,
    suborder:STRING,
    section:STRING,
    subfamily:STRING,
    genus:STRING,
    species:STRING,
    habit:STRING,
    distribution:STRING,
    reproduction:STRING,
    diet:STRING,
    history:STRING,
    extinct:STRING,
    life:STRING,
    level:STRING,
    foodhabit:STRING,
    breastfeed:STRING,
    shape:STRING,
    features:STRING,
    extinction:INTEGER,
    status:{type:INTEGER,defaultValue:1},
    read:{type:INTEGER,defaultValue:0},
  },
  {
    underscored: false,
    // 取消自动维护时间戳 [ created_at、updated_at ]
    timestamps: false,
    freezeTableName: true
  });

  return AnimalDetails;
};