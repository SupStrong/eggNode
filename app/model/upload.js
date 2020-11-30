'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Upload = app.model.define('upload', {
    file: INTEGER,
  });

  return Upload;
};