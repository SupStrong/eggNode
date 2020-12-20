'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING , TEXT  } = Sequelize;
    await queryInterface.createTable('animal_details', {
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
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('animal_details');
  },
};